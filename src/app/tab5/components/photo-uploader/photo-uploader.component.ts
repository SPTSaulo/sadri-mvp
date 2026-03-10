import { Component, Input, OnDestroy, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ModalController } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Subject, Subscription } from 'rxjs';
import { firstValueFrom } from 'rxjs';
import { StoryService } from '../../services/story.service';
import { StorageService } from '../../services/storage.service';
import { ImageOptimizerService } from '../../services/image-optimizer.service';
import { ErrorToastService } from '../../services/error-toast.service';
import { UploadProgress } from '../../models/upload-progress.model';
import { Photo } from '../../models/photo.model';
import { StorageType } from '../../models/story.model';
import { ErrorCode } from '../../models/error-code.enum';

/**
 * PhotoUploaderComponent handles photo selection, optimization, and upload
 * 
 * Validates: Requirements 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 14.2, 15.1, 15.5
 */
@Component({
  selector: 'app-photo-uploader',
  templateUrl: './photo-uploader.component.html',
  styleUrls: ['./photo-uploader.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class PhotoUploaderComponent implements OnDestroy {
  @Input() storyId!: string;

  private readonly storyService = inject(StoryService);
  private readonly storageService = inject(StorageService);
  private readonly imageOptimizer = inject(ImageOptimizerService);
  private readonly errorToastService = inject(ErrorToastService);
  private readonly modalController = inject(ModalController);
  private readonly cdr = inject(ChangeDetectorRef);

  uploadProgresses: UploadProgress[] = [];
  isUploading = false;
  uploadError: string | null = null;
  private uploadSubscriptions: Subscription[] = [];
  private cachedFiles: File[] = []; // Cache files for retry

  ngOnDestroy(): void {
    // Clean up subscriptions
    this.uploadSubscriptions.forEach(sub => sub.unsubscribe());
  }

  /**
   * Open device photo picker and select multiple photos
   * Implements permission error handling
   * 
   * Validates: Requirements 4.1, 4.2, 4.3, 14.3
   */
  async selectPhotos(): Promise<void> {
    try {
      this.uploadError = null;

      // Request multiple photos from gallery
      const photos = await Camera.pickImages({
        quality: 90,
      });

      if (!photos.photos || photos.photos.length === 0) {
        return;
      }

      // Convert photos to File objects
      const files: File[] = [];
      for (const photo of photos.photos) {
        if (photo.webPath) {
          const response = await fetch(photo.webPath);
          const blob = await response.blob();
          const file = new File([blob], `photo-${Date.now()}.jpg`, { type: 'image/jpeg' });
          files.push(file);
        }
      }

      if (files.length > 0) {
        this.cachedFiles = files; // Cache for retry
        await this.processAndUploadPhotos(files);
      }
    } catch (error: any) {
      this.errorToastService.logError(ErrorCode.PERMISSION_DENIED, 'Error selecting photos', error);
      
      // Check if it's a permission error
      if (error.message?.includes('permission') || error.message?.includes('denied')) {
        await this.errorToastService.showError(ErrorCode.PERMISSION_DENIED);
      } else {
        this.uploadError = 'Error al seleccionar fotos. Por favor, intenta nuevamente.';
        await this.errorToastService.showError(ErrorCode.UNKNOWN_ERROR, this.uploadError);
      }
    }
  }

  /**
   * Process selected photos: optimize and upload
   * Implements storage error handling with quota warnings
   */
  private async processAndUploadPhotos(files: File[]): Promise<void> {
    try {
      this.isUploading = true;
      this.uploadProgresses = [];

      // Check storage quota before upload
      const quotaCheck = await this.storageService.checkStorageQuota();
      if (!quotaCheck.available) {
        await this.errorToastService.showWarning('Límite de almacenamiento alcanzado. Las fotos se guardarán localmente.');
      }

      // Optimize images
      const optimizedFiles = await this.optimizeImages(files);

      // Upload photos
      await this.uploadPhotos(optimizedFiles);
    } catch (error: any) {
      this.errorToastService.logError(ErrorCode.UNKNOWN_ERROR, 'Error processing photos', error);
      this.uploadError = 'Error al procesar las fotos. Por favor, intenta nuevamente.';
      await this.errorToastService.showError(ErrorCode.UNKNOWN_ERROR, this.uploadError);
      this.isUploading = false;
    }
  }

  /**
   * Optimize images before upload
   * Implements validation and error handling for invalid formats and sizes
   * 
   * Validates: Requirements 13.1, 14.2, 14.3
   */
  private async optimizeImages(files: File[]): Promise<Blob[]> {
    const optimizedFiles: Blob[] = [];

    for (const file of files) {
      try {
        // Validate image
        if (!this.imageOptimizer.validateImage(file)) {
          this.errorToastService.logError(ErrorCode.INVALID_IMAGE_FORMAT, `Invalid image file: ${file.name}`);
          await this.errorToastService.showError(ErrorCode.INVALID_IMAGE_FORMAT);
          continue;
        }

        // Check file size
        if (file.size > 10 * 1024 * 1024) { // 10MB
          this.errorToastService.logError(ErrorCode.IMAGE_TOO_LARGE, `Image too large: ${file.name}`);
          await this.errorToastService.showError(ErrorCode.IMAGE_TOO_LARGE);
          continue;
        }

        // Compress image
        const compressed = await this.imageOptimizer.compressImage(file, 1920, 0.85);
        optimizedFiles.push(compressed);
      } catch (error) {
        this.errorToastService.logError(ErrorCode.UNKNOWN_ERROR, `Error optimizing image ${file.name}`, error);
        // Continue with other files
      }
    }

    return optimizedFiles;
  }

  /**
   * Upload optimized photos to storage with progress tracking
   * Validates: Requirements 4.4, 4.5, 15.1, 15.5
   */
  private async uploadPhotos(optimizedFiles: Blob[]): Promise<void> {
    const uploadPromises: Promise<void>[] = [];

    for (let i = 0; i < optimizedFiles.length; i++) {
      const file = optimizedFiles[i];
      const photoId = this.generatePhotoId();
      const path = `stories/${this.storyId}/${photoId}.jpg`;

      // Initialize progress tracking
      this.uploadProgresses.push({
        photoId,
        fileName: `Photo ${i + 1}`,
        progress: 0,
        status: 'pending',
      });

      // Start upload
      const uploadPromise = new Promise<void>((resolve, reject) => {
        let completedProgress: any = null;
        
        const subscription = this.storageService.uploadPhoto(file, path).subscribe({
          next: (progress) => {
            // Update progress in array
            const index = this.uploadProgresses.findIndex(p => p.photoId === photoId);
            if (index !== -1) {
              this.uploadProgresses[index] = progress;
              // Force change detection
              this.cdr.detectChanges();
            }
            
            // Store completed progress when upload finishes
            if (progress.status === 'complete') {
              completedProgress = progress;
            }
          },
          error: (error) => {
            console.error(`Upload failed for ${photoId}:`, error);
            reject(error);
          },
          complete: async () => {
            try {
              if (completedProgress && completedProgress.url) {
                // Add photo metadata to story
                await this.addPhotoToStory(photoId, completedProgress.url, completedProgress.storageType || 'cloudinary', file.size);
                resolve();
              } else {
                reject(new Error('Upload completed but no URL received'));
              }
            } catch (error) {
              reject(error);
            }
          },
        });

        this.uploadSubscriptions.push(subscription);
      });

      uploadPromises.push(uploadPromise);
    }

    try {
      // Wait for all uploads to complete
      await Promise.all(uploadPromises);
      
      // All uploads successful
      this.isUploading = false;
      this.uploadProgresses = [];
      await this.errorToastService.showSuccess('Fotos subidas exitosamente');
      
      // Close modal with success role
      this.modalController.dismiss(null, 'success');
    } catch (error: any) {
      this.errorToastService.logError(ErrorCode.NETWORK_TIMEOUT, 'Error during upload', error);
      this.uploadError = 'Algunas fotos no se pudieron subir. Por favor, intenta nuevamente.';
      await this.errorToastService.showErrorWithRetry(
        ErrorCode.NETWORK_TIMEOUT,
        () => this.retryUpload()
      );
      this.isUploading = false;
    }
  }

  /**
   * Add photo metadata to story in Firestore
   * Validates: Requirements 4.5
   */
  private async addPhotoToStory(
    photoId: string,
    url: string,
    storageType: StorageType,
    size: number
  ): Promise<void> {
    try {
      // Fetch current story using firstValueFrom
      const story = await firstValueFrom(this.storyService.get(this.storyId));

      // Create new photo metadata
      const newPhoto: Photo = {
        id: photoId,
        url,
        storageType,
        order: story.photos.length,
        uploadedAt: new Date(),
        size,
      };

      // Add photo to story
      story.photos.push(newPhoto);
      
      // Update photo count
      story.photoCount = story.photos.length;
      
      // Update updatedAt timestamp
      story.updatedAt = new Date();

      // Update story in Firestore
      await this.storyService.update(story);
    } catch (error) {
      console.error('Error adding photo to story:', error);
      throw error;
    }
  }

  /**
   * Retry failed uploads
   * Uses cached files for retry
   * 
   * Validates: Requirements 4.6, 14.2
   */
  async retryUpload(): Promise<void> {
    if (this.cachedFiles.length > 0) {
      this.uploadError = null;
      await this.processAndUploadPhotos(this.cachedFiles);
    } else {
      // No cached files, ask user to select again
      await this.selectPhotos();
    }
  }

  /**
   * Get upload progress summary
   * Validates: Requirement 15.5
   */
  getUploadSummary(): string {
    const completed = this.uploadProgresses.filter(p => p.status === 'complete').length;
    const total = this.uploadProgresses.length;
    return `Subiendo ${completed} de ${total}`;
  }

  /**
   * Generate unique photo ID
   */
  private generatePhotoId(): string {
    return `photo-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }
  
  /**
   * Close modal without saving
   */
  closeModal(): void {
    this.modalController.dismiss(null, 'cancel');
  }
}
