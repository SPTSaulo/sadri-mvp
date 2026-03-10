import { Component, inject, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { StoryService } from '../../services/story.service';
import { StorageService } from '../../services/storage.service';
import { ImageOptimizerService } from '../../services/image-optimizer.service';
import { ErrorToastService } from '../../services/error-toast.service';
import { Story } from '../../models/story.model';
import { ErrorCode } from '../../models/error-code.enum';
import { firstValueFrom } from 'rxjs';

/**
 * StoryEditorComponent - Modal component for editing story title and cover image
 * 
 * Validates: Requirements 11.1, 11.2, 11.3, 11.4, 11.5
 */
@Component({
  selector: 'app-story-editor',
  templateUrl: './story-editor.component.html',
  styleUrls: ['./story-editor.component.scss'],
  standalone: false,
})
export class StoryEditorComponent implements OnInit {
  private readonly modalController = inject(ModalController);
  private readonly toastController = inject(ToastController);
  private readonly storyService = inject(StoryService);
  private readonly storageService = inject(StorageService);
  private readonly imageOptimizer = inject(ImageOptimizerService);
  private readonly errorToastService = inject(ErrorToastService);

  @Input() storyId!: string;

  public story: Story | null = null;
  public title = '';
  public newCoverImageUrl: string | null = null;
  public newCoverImageFile: Blob | null = null;
  public isLoading = false;
  public isSelectingImage = false;
  public isSaving = false;

  /**
   * Load story data on component initialization
   */
  async ngOnInit() {
    await this.loadStory();
  }

  /**
   * Load story data from StoryService
   * Implements network error handling
   */
  private async loadStory() {
    try {
      this.isLoading = true;
      this.story = await firstValueFrom(this.storyService.get(this.storyId));
      if (this.story) {
        this.title = this.story.title;
      }
    } catch (error) {
      this.errorToastService.logError(ErrorCode.NETWORK_TIMEOUT, 'Error loading story', error);
      await this.errorToastService.showError(ErrorCode.NETWORK_TIMEOUT);
      this.cancel();
    } finally {
      this.isLoading = false;
    }
  }

  /**
   * Select and upload new cover image using Capacitor Camera plugin
   * Implements permission error handling
   */
  async changeCover() {
    try {
      this.isSelectingImage = true;

      // Request camera permissions and open photo picker
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Photos, // Use photo library
      });

      if (image.dataUrl) {
        this.newCoverImageUrl = image.dataUrl;
        
        // Convert data URL to Blob for upload
        this.newCoverImageFile = await this.dataUrlToBlob(image.dataUrl);
      }
    } catch (error: any) {
      this.errorToastService.logError(ErrorCode.PERMISSION_DENIED, 'Error selecting image', error);
      
      // Check if it's a permission error
      if (error.message?.includes('permission') || error.message?.includes('denied')) {
        await this.errorToastService.showError(ErrorCode.PERMISSION_DENIED);
      } else {
        await this.errorToastService.showError(ErrorCode.UNKNOWN_ERROR, 'Error al seleccionar la imagen. Por favor, inténtalo de nuevo.');
      }
    } finally {
      this.isSelectingImage = false;
    }
  }

  /**
   * Convert data URL to Blob
   */
  private async dataUrlToBlob(dataUrl: string): Promise<Blob> {
    const response = await fetch(dataUrl);
    return response.blob();
  }

  /**
   * Convert Blob to File
   */
  private blobToFile(blob: Blob, fileName: string): File {
    return new File([blob], fileName, { type: blob.type });
  }

  /**
   * Update story title
   */
  updateTitle(newTitle: string) {
    this.title = newTitle;
  }

  /**
   * Check if there are changes to save
   */
  hasChanges(): boolean {
    if (!this.story) return false;
    return this.title.trim() !== this.story.title || this.newCoverImageFile !== null;
  }

  /**
   * Check if form is valid
   */
  isFormValid(): boolean {
    return this.title.trim().length > 0;
  }

  /**
   * Save changes to story
   * Implements comprehensive error handling for network, storage, and data integrity errors
   */
  async saveChanges() {
    if (!this.isFormValid() || !this.story) {
      await this.showToast('Por favor, completa todos los campos requeridos.');
      return;
    }

    if (!this.hasChanges()) {
      await this.showToast('No hay cambios para guardar.');
      return;
    }

    try {
      this.isSaving = true;

      // Update story object
      const updatedStory: Story = {
        ...this.story,
        title: this.title.trim(),
      };

      // If new cover image selected, upload it
      if (this.newCoverImageFile) {
        // Convert Blob to File for image optimizer
        const imageFile = this.blobToFile(
          this.newCoverImageFile,
          `cover-${Date.now()}.jpg`
        );

        // Validate image
        if (!this.imageOptimizer.validateImage(imageFile)) {
          await this.errorToastService.showError(ErrorCode.INVALID_IMAGE_FORMAT);
          return;
        }

        // Check file size
        if (imageFile.size > 10 * 1024 * 1024) {
          await this.errorToastService.showError(ErrorCode.IMAGE_TOO_LARGE);
          return;
        }

        // Optimize image before upload
        const optimizedImage = await this.imageOptimizer.compressImage(
          imageFile,
          1920,
          0.85
        );

        // Generate thumbnail
        const thumbnail = await this.imageOptimizer.generateThumbnail(
          imageFile,
          300
        );

        // Upload cover image
        const coverPath = `stories/${this.storyId}/cover-${Date.now()}.jpg`;
        
        // Wait for upload to complete
        const uploadResult = await new Promise<any>((resolve, reject) => {
          this.storageService.uploadPhoto(thumbnail, coverPath).subscribe({
            next: (progress) => {
              if (progress.status === 'complete') {
                resolve(progress);
              } else if (progress.status === 'error') {
                reject(new Error(progress.error || 'Upload failed'));
              }
            },
            error: (error) => {
              reject(error);
            }
          });
        });

        if (uploadResult.url) {
          updatedStory.coverUrl = uploadResult.url;
          updatedStory.coverStorageType = uploadResult.storageType || 'cloudinary';
        } else {
          throw new Error('Failed to upload cover image');
        }
      }

      // Update story in Firestore
      await this.storyService.update(updatedStory);

      // Show success message (Requirement 11.5)
      await this.showNativeToast('Cambios guardados exitosamente');

      // Close modal and return updated story with refresh flag
      this.modalController.dismiss({ story: updatedStory, updated: true }, 'save');
    } catch (error: any) {
      this.errorToastService.logError(ErrorCode.UNKNOWN_ERROR, 'Error saving changes', error);
      
      // Determine error type
      const errorCode = this.determineErrorCode(error);
      await this.errorToastService.showErrorWithRetry(
        errorCode,
        () => this.saveChanges()
      );
    } finally {
      this.isSaving = false;
    }
  }

  /**
   * Cancel and close modal
   */
  cancel() {
    this.modalController.dismiss(null, 'cancel');
  }

  /**
   * Show toast message
   */
  private async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
      position: 'bottom',
      cssClass: 'neutral-toast',
    });
    await toast.present();
  }

  /**
   * Show native-style toast message
   */
  private async showNativeToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'bottom',
      cssClass: 'neutral-toast',
      buttons: [
        {
          icon: 'checkmark-circle',
          side: 'start'
        }
      ]
    });
    await toast.present();
  }

  /**
   * Get display cover URL (new cover or existing)
   */
  getDisplayCoverUrl(): string | null {
    if (this.newCoverImageUrl) {
      return this.newCoverImageUrl;
    }
    return this.story?.coverUrl || null;
  }

  /**
   * Determine error code from error object
   */
  private determineErrorCode(error: any): ErrorCode {
    const errorMessage = error?.message?.toLowerCase() || '';
    const errorCode = error?.code || '';

    if (errorMessage.includes('network') || errorMessage.includes('timeout')) {
      return ErrorCode.NETWORK_TIMEOUT;
    }
    if (errorMessage.includes('quota') || errorCode === 'storage/quota-exceeded') {
      return ErrorCode.CLOUDINARY_QUOTA_EXCEEDED;
    }
    if (errorMessage.includes('permission')) {
      return ErrorCode.PERMISSION_DENIED;
    }
    if (errorMessage.includes('format')) {
      return ErrorCode.INVALID_IMAGE_FORMAT;
    }
    if (errorMessage.includes('too large')) {
      return ErrorCode.IMAGE_TOO_LARGE;
    }
    if (errorMessage.includes('corrupt')) {
      return ErrorCode.DATA_CORRUPTION;
    }

    return ErrorCode.UNKNOWN_ERROR;
  }
}
