import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ActionSheetController, ModalController, LoadingController, ToastController } from '@ionic/angular';
import { StoryService } from './services/story.service';
import { StorageService } from './services/storage.service';
import { ImageOptimizerService } from './services/image-optimizer.service';
import { ErrorToastService } from './services/error-toast.service';
import { Story } from './models/story.model';
import { StorageType } from './models/story.model';
import { Photo } from './models/photo.model';
import { StoryCreationModalComponent } from './components/story-creation-modal/story-creation-modal.component';
import { UploadProgress } from './models/upload-progress.model';
import { ErrorCode } from './models/error-code.enum';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
  standalone: false,
})
export class Tab5Page implements OnInit {
  private readonly storyService = inject(StoryService);
  private readonly storageService = inject(StorageService);
  private readonly imageOptimizerService = inject(ImageOptimizerService);
  private readonly errorToastService = inject(ErrorToastService);
  private readonly router = inject(Router);
  private readonly alertController = inject(AlertController);
  private readonly actionSheetController = inject(ActionSheetController);
  private readonly modalController = inject(ModalController);
  private readonly loadingController = inject(LoadingController);
  private readonly toastController = inject(ToastController);

  public stories: Story[] = [];
  public isLoading = false;
  private retryAttempts = 0;
  private readonly MAX_RETRY_ATTEMPTS = 3;

  // Pagination properties
  public currentPage = 1;
  public readonly itemsPerPage = 50;
  public totalPages = 1;
  public displayedStories: Story[] = [];
  public paginatedStories: Story[][] = []; // For virtual scroll (rows of stories)

  ngOnInit() {
    this.loadStories();
  }

  /**
   * Load all stories from StoryService
   * Implements network error handling with exponential backoff retry
   * 
   * Validates: Requirements 14.1, 14.5
   */
  private loadStories() {
    this.isLoading = true;
    this.storyService.getAll().subscribe({
      next: (stories) => {
        this.stories = stories;
        this.isLoading = false;
        this.retryAttempts = 0; // Reset retry counter on success
        this.updatePagination(); // Update pagination after loading stories
      },
      error: (error) => {
        this.errorToastService.logError(ErrorCode.NETWORK_TIMEOUT, 'Error loading stories', error);
        this.isLoading = false;
        
        // Implement exponential backoff retry
        if (this.retryAttempts < this.MAX_RETRY_ATTEMPTS) {
          this.retryAttempts++;
          const delayMs = Math.pow(2, this.retryAttempts - 1) * 1000; // 1s, 2s, 4s
          
          this.errorToastService.showError(
            ErrorCode.NETWORK_TIMEOUT,
            `Reintentando en ${delayMs / 1000} segundos...`
          );
          
          setTimeout(() => {
            this.loadStories();
          }, delayMs);
        } else {
          // Max retries reached, show error with manual retry option
          this.errorToastService.showErrorWithRetry(
            ErrorCode.NETWORK_TIMEOUT,
            () => {
              this.retryAttempts = 0;
              this.loadStories();
            }
          );
        }
      }
    });
  }

  /**
   * Navigate to story creation flow
   * Opens the story creation modal and handles the complete creation process
   * 
   * Validates: Requirements 3.1, 3.2, 3.3, 3.4, 3.5, 4.6, 13.1, 13.3, 14.2, 15.1
   */
  async createStory() {
    const modal = await this.modalController.create({
      component: StoryCreationModalComponent,
    });

    await modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'create' && data) {
      // Show loading indicator
      const loading = await this.loadingController.create({
        message: 'Creando historia...',
      });
      await loading.present();

      try {
        // Step 1: Compress cover image and generate thumbnail
        const coverImageFile = data.coverImageFile as Blob;
        const compressedCover = await this.imageOptimizerService.compressImage(
          coverImageFile as File,
          1920,
          0.85
        );
        const thumbnail = await this.imageOptimizerService.generateThumbnail(
          coverImageFile as File,
          300
        );

        // Step 2: Generate unique ID for the story
        const storyId = this.generateUniqueId();
        const coverPath = `stories/${storyId}/cover.jpg`;
        const thumbnailPath = `stories/${storyId}/thumbnail.jpg`;

        // Step 3: Upload cover image and thumbnail
        let coverUrl = '';
        let coverStorageType: StorageType = 'cloudinary';

        // Upload cover image with progress tracking
        await new Promise<void>((resolve, reject) => {
          this.storageService.uploadPhoto(compressedCover, coverPath).subscribe({
            next: (progress: UploadProgress) => {
              if (progress.status === 'complete') {
                // Get URL and storage type from progress
                coverUrl = progress.url || '';
                coverStorageType = progress.storageType || 'cloudinary';
                resolve();
              } else if (progress.status === 'error') {
                reject(new Error(progress.error || 'Upload failed'));
              }
            },
            error: (error) => {
              reject(error);
            },
          });
        });

        // Upload thumbnail (fire and forget, no need to wait)
        this.storageService.uploadPhoto(thumbnail, thumbnailPath).subscribe({
          error: (error) => {
            console.error('Thumbnail upload failed:', error);
            // Don't fail the story creation if thumbnail fails
          },
        });

        // Step 4: Create story metadata in Firestore
        const newStory: Partial<Story> = {
          title: data.title,
          coverUrl: coverUrl,
          coverStorageType: coverStorageType,
          photoCount: 0,
          photos: [],
        };

        await this.storyService.create(newStory);

        // Dismiss loading and show success message
        await loading.dismiss();
        await this.showToast('Historia creada exitosamente', 'success');

        // Refresh story list
        this.loadStories();
      } catch (error) {
        console.error('Error creating story:', error);
        await loading.dismiss();

        // Determine error type and show appropriate message
        const errorCode = this.determineErrorCode(error);
        this.errorToastService.logError(errorCode, 'Error creating story', error);

        // Show error with retry option
        await this.errorToastService.showErrorWithRetry(
          errorCode,
          () => this.retryStoryCreation(data)
        );
      }
    }
  }

  /**
   * Retry story creation after an error
   * @param data - The story creation data from the modal
   */
  private async retryStoryCreation(data: any) {
    // Show loading indicator
    const loading = await this.loadingController.create({
      message: 'Reintentando...',
    });
    await loading.present();

    try {
      // Repeat the same process as createStory
      const coverImageFile = data.coverImageFile as Blob;
      const compressedCover = await this.imageOptimizerService.compressImage(
        coverImageFile as File,
        1920,
        0.85
      );
      const thumbnail = await this.imageOptimizerService.generateThumbnail(
        coverImageFile as File,
        300
      );

      const storyId = this.generateUniqueId();
      const coverPath = `stories/${storyId}/cover.jpg`;
      const thumbnailPath = `stories/${storyId}/thumbnail.jpg`;

      let coverUrl = '';
      let coverStorageType: StorageType = 'cloudinary';

      await new Promise<void>((resolve, reject) => {
        this.storageService.uploadPhoto(compressedCover, coverPath).subscribe({
          next: (progress: UploadProgress) => {
            if (progress.status === 'complete') {
              coverUrl = progress.url || '';
              coverStorageType = progress.storageType || 'cloudinary';
              resolve();
            } else if (progress.status === 'error') {
              reject(new Error(progress.error || 'Upload failed'));
            }
          },
          error: (error) => {
            reject(error);
          },
        });
      });

      this.storageService.uploadPhoto(thumbnail, thumbnailPath).subscribe({
        error: (error) => {
          console.error('Thumbnail upload failed:', error);
        },
      });

      const newStory: Partial<Story> = {
        title: data.title,
        coverUrl: coverUrl,
        coverStorageType: coverStorageType,
        photoCount: 0,
        photos: [],
      };

      await this.storyService.create(newStory);

      await loading.dismiss();
      await this.showToast('Historia creada exitosamente', 'success');
      this.loadStories();
    } catch (error) {
      console.error('Retry failed:', error);
      await loading.dismiss();
      
      const errorCode = this.determineErrorCode(error);
      this.errorToastService.logError(errorCode, 'Retry story creation failed', error);
      await this.errorToastService.showError(errorCode);
    }
  }

  /**
   * Generate a unique ID for a story
   * Uses timestamp and random string for uniqueness
   */
  private generateUniqueId(): string {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 9);
    return `${timestamp}-${random}`;
  }

  /**
   * Navigate to StoryViewerComponent to view a specific story
   * @param storyId - The ID of the story to view
   */
  /**
   * Open story viewer modal
   */
  async openStory(storyId: string) {
    const modal = await this.modalController.create({
      component: (await import('./components/story-viewer/story-viewer.component')).StoryViewerComponent,
      componentProps: {
        storyId: storyId
      },
      cssClass: 'story-viewer-modal'
    });

    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data?.updated) {
      // Reload stories if changes were made
      this.loadStories();
    }
  }

  /**
   * Delete a story with confirmation dialog and cascade cleanup
   * Implements complete deletion of story and all associated photos from storage
   * 
   * @param storyId - The ID of the story to delete
   * Validates: Requirements 10.1, 10.2, 10.3, 10.6
   */
  async deleteStory(storyId: string) {
    const alert = await this.alertController.create({
      header: 'Confirmar eliminación',
      message: '¿Estás seguro de que deseas eliminar esta historia? Esta acción no se puede deshacer.',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: async () => {
            await this.performStoryDeletion(storyId);
          },
        },
      ],
    });

    await alert.present();
  }

  /**
   * Perform the actual story deletion with cascade cleanup
   * Shows progress indicator and handles all cleanup operations
   * 
   * @param storyId - The ID of the story to delete
   * Validates: Requirements 10.2, 10.3
   */
  private async performStoryDeletion(storyId: string): Promise<void> {
    // Show loading indicator
    const loading = await this.loadingController.create({
      message: 'Eliminando historia...',
    });
    await loading.present();

    try {
      // Step 1: Load story with all photos
      const story = await new Promise<Story>((resolve, reject) => {
        this.storyService.get(storyId).subscribe({
          next: (story) => resolve(story),
          error: (error) => reject(error),
        });
      });

      // Step 2: Delete all photos from storage (both Cloudinary and IndexedDB)
      if (story.photos && story.photos.length > 0) {
        // Update loading message to show progress
        loading.message = `Eliminando fotos (0/${story.photos.length})...`;

        for (let i = 0; i < story.photos.length; i++) {
          const photo = story.photos[i];
          
          // Update progress
          loading.message = `Eliminando fotos (${i + 1}/${story.photos.length})...`;

          try {
            // Delete photo from storage
            await this.storageService.deletePhoto(photo.url, photo.storageType);
            
            // Also delete thumbnail if it exists
            if (photo.thumbnailUrl) {
              try {
                await this.storageService.deletePhoto(photo.thumbnailUrl, photo.storageType);
              } catch (thumbnailError) {
                // Log but don't fail if thumbnail deletion fails
                console.warn(`Failed to delete thumbnail for photo ${photo.id}:`, thumbnailError);
              }
            }
          } catch (photoError) {
            // Log error but continue with other photos
            console.error(`Failed to delete photo ${photo.id}:`, photoError);
            this.errorToastService.logError(
              ErrorCode.DATA_CORRUPTION,
              `Error deleting photo ${photo.id}`,
              photoError
            );
          }
        }
      }

      // Step 3: Delete cover image from storage
      loading.message = 'Eliminando portada...';
      try {
        await this.storageService.deletePhoto(story.coverUrl, story.coverStorageType);
      } catch (coverError) {
        // Log error but continue with story deletion
        console.error('Failed to delete cover image:', coverError);
        this.errorToastService.logError(
          ErrorCode.DATA_CORRUPTION,
          'Error deleting cover image',
          coverError
        );
      }

      // Step 4: Delete story metadata from local storage
      loading.message = 'Eliminando metadatos...';
      await this.storyService.delete(storyId);

      // Step 5: Dismiss loading and show success message
      await loading.dismiss();
      await this.showToast('Historia eliminada exitosamente', 'success');

      // Step 6: Refresh story list
      this.loadStories();
    } catch (error) {
      console.error('Error deleting story:', error);
      await loading.dismiss();

      // Show error message
      this.errorToastService.logError(
        ErrorCode.DATA_CORRUPTION,
        'Error deleting story',
        error
      );
      await this.errorToastService.showError(
        ErrorCode.DATA_CORRUPTION,
        'No se pudo eliminar la historia completamente. Algunos archivos pueden no haberse eliminado.'
      );
    }
  }

  /**
   * Open StoryEditorComponent modal to edit a story
   * @param storyId - The ID of the story to edit
   */
  async editStory(storyId: string) {
    const modal = await this.modalController.create({
      component: (await import('./components/story-editor/story-editor.component')).StoryEditorComponent,
      componentProps: {
        storyId: storyId
      }
    });

    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data?.updated) {
      // Reload stories if changes were made
      this.loadStories();
    }
  }

  /**
   * Handle pull-to-refresh event
   * Implements network error handling
   * 
   * @param event - The refresh event from ion-refresher
   * Validates: Requirements 14.1
   */
  handleRefresh(event: any) {
    this.storyService.getAll().subscribe({
      next: (stories) => {
        this.stories = stories;
        event.target.complete();
        this.updatePagination(); // Update pagination after refresh
      },
      error: (error) => {
        this.errorToastService.logError(ErrorCode.NETWORK_TIMEOUT, 'Error refreshing stories', error);
        this.errorToastService.showError(ErrorCode.NETWORK_TIMEOUT);
        event.target.complete();
      }
    });
  }

  /**
   * Show action sheet menu for story options (edit/delete)
   * @param storyId - The ID of the story
   */
  async showStoryMenu(storyId: string) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones de historia',
      buttons: [
        {
          text: 'Editar',
          icon: 'create-outline',
          handler: () => {
            this.editStory(storyId);
          }
        },
        {
          text: 'Eliminar',
          icon: 'trash-outline',
          role: 'destructive',
          handler: () => {
            this.deleteStory(storyId);
          }
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel'
        }
      ]
    });

    await actionSheet.present();
  }

  /**
   * Show a toast message
   * @param message - The message to display
   * @param color - The toast color (success, danger, warning)
   */
  private async showToast(message: string, type: 'success' | 'error' | 'warning' = 'success') {
    const iconMap = {
      success: 'checkmark-circle',
      error: 'alert-circle',
      warning: 'warning'
    };

    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'bottom',
      cssClass: 'neutral-toast',
      buttons: [
        {
          icon: iconMap[type],
          side: 'start'
        }
      ]
    });

    await toast.present();
  }

  /**
   * Determine error code from error object
   * Analyzes error to categorize it appropriately
   * 
   * @param error - The error object
   * @returns Appropriate ErrorCode enum value
   * Validates: Requirements 14.1, 14.2, 14.4, 14.5
   */
  private determineErrorCode(error: any): ErrorCode {
    const errorMessage = error?.message?.toLowerCase() || '';
    const errorCode = error?.code || '';

    // Network errors
    if (errorMessage.includes('network') || errorMessage.includes('timeout') || errorMessage.includes('connection')) {
      return ErrorCode.NETWORK_TIMEOUT;
    }

    // Storage quota errors (Cloudinary has generous limits)
    if (errorMessage.includes('quota') || errorCode === 'storage/quota-exceeded') {
      return ErrorCode.CLOUDINARY_QUOTA_EXCEEDED;
    }

    // Permission errors
    if (errorMessage.includes('permission') || errorCode.includes('permission')) {
      return ErrorCode.PERMISSION_DENIED;
    }

    // Image format errors
    if (errorMessage.includes('format') || errorMessage.includes('invalid image')) {
      return ErrorCode.INVALID_IMAGE_FORMAT;
    }

    // Image size errors
    if (errorMessage.includes('too large') || errorMessage.includes('size')) {
      return ErrorCode.IMAGE_TOO_LARGE;
    }

    // Data corruption errors
    if (errorMessage.includes('corrupt') || errorMessage.includes('invalid data')) {
      return ErrorCode.DATA_CORRUPTION;
    }

    // Default to unknown error
    return ErrorCode.UNKNOWN_ERROR;
  }

  /**
   * Update pagination based on current stories
   * Calculates total pages and updates displayed stories
   * Implements pagination for collections exceeding 50 stories
   * 
   * Validates: Requirements 2.1
   */
  private updatePagination(): void {
    // Calculate total pages
    this.totalPages = Math.ceil(this.stories.length / this.itemsPerPage);
    
    // Ensure current page is valid
    if (this.currentPage > this.totalPages && this.totalPages > 0) {
      this.currentPage = this.totalPages;
    }
    if (this.currentPage < 1) {
      this.currentPage = 1;
    }

    // Update displayed stories for current page
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.displayedStories = this.stories.slice(startIndex, endIndex);

    // Prepare data for virtual scroll (group stories into rows)
    // Each row contains stories for one row in the grid (2 columns on mobile, 4 on tablet, etc.)
    this.paginatedStories = this.groupStoriesIntoRows(this.displayedStories);
  }

  /**
   * Group stories into rows for virtual scrolling
   * Creates rows based on responsive column layout
   * 
   * @param stories - The stories to group
   * @returns Array of story rows
   */
  private groupStoriesIntoRows(stories: Story[]): Story[][] {
    const rows: Story[][] = [];
    const itemsPerRow = 2; // Default to 2 columns (mobile)
    
    for (let i = 0; i < stories.length; i += itemsPerRow) {
      rows.push(stories.slice(i, i + itemsPerRow));
    }
    
    return rows;
  }

  /**
   * Navigate to the next page
   * Validates: Requirements 2.1
   */
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagination();
      
      // Scroll to top of content
      const content = document.querySelector('ion-content');
      content?.scrollToTop(300);
    }
  }

  /**
   * Navigate to the previous page
   * Validates: Requirements 2.1
   */
  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
      
      // Scroll to top of content
      const content = document.querySelector('ion-content');
      content?.scrollToTop(300);
    }
  }
}
