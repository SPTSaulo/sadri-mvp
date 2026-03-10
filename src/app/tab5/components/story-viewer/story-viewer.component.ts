import { Component, Input, OnInit, OnDestroy, ViewChild, ViewContainerRef, ComponentRef } from '@angular/core';
import { ModalController, AlertController, ActionSheetController } from '@ionic/angular';
import { Subscription, interval } from 'rxjs';
import { Story } from '../../models/story.model';
import { Photo } from '../../models/photo.model';
import { StoryService } from '../../services/story.service';
import { StorageService } from '../../services/storage.service';
import { ErrorToastService } from '../../services/error-toast.service';
import { ErrorCode } from '../../models/error-code.enum';
import { PhotoUploaderComponent } from '../photo-uploader/photo-uploader.component';

@Component({
  selector: 'app-story-viewer',
  templateUrl: './story-viewer.component.html',
  styleUrls: ['./story-viewer.component.scss'],
  standalone: false,
})
export class StoryViewerComponent implements OnInit, OnDestroy {
  @Input() storyId!: string;

  story: Story | null = null;
  photos: Photo[] = [];
  currentPhotoIndex: number = 0;
  progressPercentage: number = 0;
  isEditMode: boolean = false;
  private storyUpdated: boolean = false;

  private autoAdvanceTimer: Subscription | null = null;
  private progressTimer: Subscription | null = null;
  private readonly AUTO_ADVANCE_DURATION = 5000; // 5 seconds
  private readonly PROGRESS_UPDATE_INTERVAL = 100; // Update every 100ms
  private preloadedImages: Map<string, HTMLImageElement> = new Map(); // Cache for preloaded images
  
  @ViewChild('photoUploaderContainer', { read: ViewContainerRef }) photoUploaderContainer?: ViewContainerRef;
  private photoUploaderRef: ComponentRef<PhotoUploaderComponent> | null = null;

  constructor(
    private storyService: StoryService,
    private storageService: StorageService,
    private errorToastService: ErrorToastService,
    private modalController: ModalController,
    private alertController: AlertController,
    private actionSheetController: ActionSheetController
  ) {}

  ngOnInit() {
    this.loadStory();
  }

  ngOnDestroy() {
    this.stopAutoAdvance();
  }

  /**
   * Load story and photos from StoryService
   * Implements network error handling
   * 
   * Requirements: 5.1, 5.2, 14.1, 14.5
   */
  private loadStory(): void {
    this.storyService.get(this.storyId).subscribe({
      next: (story) => {
        // Fix inconsistency: update photoCount if it doesn't match photos array length
        if (story.photoCount !== story.photos.length) {
          story.photoCount = story.photos.length;
          // Update in Firestore
          this.storyService.update(story).catch(error => {
            console.error('Error updating photoCount:', error);
          });
        }
        
        this.story = story;
        this.photos = story.photos.sort((a, b) => a.order - b.order);
        this.currentPhotoIndex = 0;
        this.preloadNextPhoto(); // Preload next photo for smooth transitions
        this.startAutoAdvance();
      },
      error: (error) => {
        this.errorToastService.logError(ErrorCode.NETWORK_TIMEOUT, 'Error loading story', error);
        this.errorToastService.showError(ErrorCode.NETWORK_TIMEOUT);
        this.closeViewer();
      }
    });
  }

  /**
   * Start auto-advance timer
   * Requirements: 6.1, 6.4
   */
  private startAutoAdvance(): void {
    this.stopAutoAdvance();
    this.progressPercentage = 0;

    // Start progress bar update
    let elapsed = 0;
    this.progressTimer = interval(this.PROGRESS_UPDATE_INTERVAL).subscribe(() => {
      elapsed += this.PROGRESS_UPDATE_INTERVAL;
      this.progressPercentage = (elapsed / this.AUTO_ADVANCE_DURATION) * 100;

      if (this.progressPercentage >= 100) {
        this.progressPercentage = 100;
      }
    });

    // Start auto-advance timer
    this.autoAdvanceTimer = interval(this.AUTO_ADVANCE_DURATION).subscribe(() => {
      this.nextPhoto();
    });
  }

  /**
   * Pause auto-advance timer
   * Requirements: 6.4, 7.5
   */
  private pauseAutoAdvance(): void {
    if (this.autoAdvanceTimer) {
      this.autoAdvanceTimer.unsubscribe();
      this.autoAdvanceTimer = null;
    }
    if (this.progressTimer) {
      this.progressTimer.unsubscribe();
      this.progressTimer = null;
    }
  }

  /**
   * Stop auto-advance timer completely
   */
  private stopAutoAdvance(): void {
    this.pauseAutoAdvance();
  }

  /**
   * Reset auto-advance timer from zero
   * Requirements: 6.4
   */
  private resetAutoAdvance(): void {
    this.startAutoAdvance();
  }

  /**
   * Handle tap events for manual navigation
   * Requirements: 7.1, 7.2, 7.3, 7.4, 7.5
   */
  handleTap(event: MouseEvent | TouchEvent): void {
    this.pauseAutoAdvance();

    const clientX = event instanceof MouseEvent 
      ? event.clientX 
      : event.touches[0].clientX;
    
    const screenWidth = window.innerWidth;
    const tapPosition = clientX / screenWidth;

    // Left half tap - go to previous photo
    if (tapPosition < 0.5) {
      this.previousPhoto();
    } 
    // Right half tap - go to next photo
    else {
      this.nextPhoto();
    }

    this.resetAutoAdvance();
  }

  /**
   * Advance to next photo or close viewer if last photo
   * Requirements: 7.1, 7.4, 13.4, 13.5
   */
  nextPhoto(): void {
    if (this.currentPhotoIndex < this.photos.length - 1) {
      this.currentPhotoIndex++;
      this.preloadNextPhoto(); // Preload next photo for smooth transitions
      this.resetAutoAdvance();
    } else {
      // Last photo - close viewer
      this.closeViewer();
    }
  }

  /**
   * Go back to previous photo
   * Requirements: 7.2, 7.3
   */
  previousPhoto(): void {
    if (this.currentPhotoIndex > 0) {
      this.currentPhotoIndex--;
      this.preloadNextPhoto(); // Preload next photo for smooth transitions
    }
    // If already at first photo (index 0), stay there
  }

  /**
   * Close viewer and return to main view
   * Requirements: 5.5
   */
  closeViewer(): void {
    this.stopAutoAdvance();
    this.modalController.dismiss(
      this.storyUpdated ? { updated: true } : null
    );
  }

  /**
   * Get current photo counter text
   * Requirements: 5.4
   */
  getPhotoCounter(): string {
    if (this.photos.length === 0) {
      return '0 / 0';
    }
    return `${this.currentPhotoIndex + 1} / ${this.photos.length}`;
  }

  /**
   * Get current photo
   */
  getCurrentPhoto(): Photo | null {
    return this.photos[this.currentPhotoIndex] || null;
  }

  /**
   * Delete current photo with confirmation dialog
   * Requirements: 10.4, 10.5, 10.6
   */
  async deletePhoto(photoId: string): Promise<void> {
    // Show confirmation dialog
    const alert = await this.alertController.create({
      header: 'Delete Photo',
      message: 'Are you sure you want to delete this photo? This action cannot be undone.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Delete',
          role: 'destructive',
          handler: async () => {
            await this.performPhotoDelete(photoId);
          },
        },
      ],
    });

    await alert.present();
  }

  /**
   * Perform the actual photo deletion
   * Implements data integrity error handling
   * 
   * Requirements: 10.5, 14.4
   */
  private async performPhotoDelete(photoId: string): Promise<void> {
    if (!this.story) return;

    try {
      // Find the photo to delete
      const photoToDelete = this.photos.find(p => p.id === photoId);
      if (!photoToDelete) {
        this.errorToastService.logError(ErrorCode.DATA_CORRUPTION, 'Photo not found', photoId);
        await this.errorToastService.showError(ErrorCode.DATA_CORRUPTION);
        return;
      }

      // Delete photo from storage
      await this.storageService.deletePhoto(photoToDelete.url, photoToDelete.storageType);

      // Remove photo from photos array
      const updatedPhotos = this.story.photos.filter(p => p.id !== photoId);

      // Update story metadata
      const updatedStory: Story = {
        ...this.story,
        photos: updatedPhotos,
        photoCount: updatedPhotos.length,
      };

      // Save updated story to Firestore
      await this.storyService.update(updatedStory);

      // Update local state
      this.story = updatedStory;
      this.photos = updatedPhotos.sort((a, b) => a.order - b.order);

      await this.errorToastService.showSuccess('Foto eliminada exitosamente');

      // Navigate to next photo or close viewer if last photo deleted
      if (this.photos.length === 0) {
        // No photos left, close viewer
        this.closeViewer();
      } else if (this.currentPhotoIndex >= this.photos.length) {
        // Current index out of bounds, go to last photo
        this.currentPhotoIndex = this.photos.length - 1;
        this.resetAutoAdvance();
      } else {
        // Stay on current index (which now shows the next photo)
        this.resetAutoAdvance();
      }
    } catch (error) {
      this.errorToastService.logError(ErrorCode.DATA_CORRUPTION, 'Error deleting photo', error);
      await this.errorToastService.showError(ErrorCode.DATA_CORRUPTION, 'No se pudo eliminar la foto. Por favor, intenta nuevamente.');
    }
  }

  /**
   * Toggle edit mode for photo reordering
   * Requirements: 12.1
   */
  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;
    
    if (this.isEditMode) {
      // Pause auto-advance when entering edit mode
      this.stopAutoAdvance();
    } else {
      // Resume auto-advance when exiting edit mode
      this.startAutoAdvance();
    }
  }

  /**
   * Handle photo reordering from ion-reorder-group
   * Implements data integrity error handling
   * 
   * Requirements: 12.2, 12.3, 12.4, 14.4
   */
  async reorderPhotos(event: any): Promise<void> {
    if (!this.story) return;

    try {
      // Reorder the photos array based on the drag event
      const itemToMove = this.photos.splice(event.detail.from, 1)[0];
      this.photos.splice(event.detail.to, 0, itemToMove);

      // Update order property for each photo
      this.photos.forEach((photo, index) => {
        photo.order = index;
      });

      // Complete the reorder animation
      event.detail.complete();

      // Save new order to Firestore
      const photoIds = this.photos.map(p => p.id);
      await this.storyService.reorderPhotos(this.story.id, photoIds);

      // Update local story state
      this.story.photos = [...this.photos];

      await this.errorToastService.showSuccess('Orden actualizado exitosamente');
    } catch (error) {
      this.errorToastService.logError(ErrorCode.DATA_CORRUPTION, 'Error reordering photos', error);
      await this.errorToastService.showError(ErrorCode.DATA_CORRUPTION, 'No se pudo reordenar las fotos. Por favor, intenta nuevamente.');
    }
  }

  /**
   * Exit edit mode and refresh viewer
   */
  exitEditMode(): void {
    this.isEditMode = false;
    this.startAutoAdvance();
  }

  /**
   * Preload next photo for smooth transitions
   * Implements progressive loading optimization
   * 
   * Requirements: 13.4, 13.5
   */
  private preloadNextPhoto(): void {
    // Get next photo index
    const nextIndex = this.currentPhotoIndex + 1;
    
    // Check if there is a next photo
    if (nextIndex < this.photos.length) {
      const nextPhoto = this.photos[nextIndex];
      
      // Check if already preloaded
      if (!this.preloadedImages.has(nextPhoto.url)) {
        // Create new image element for preloading
        const img = new Image();
        
        // Set up load handlers
        img.onload = () => {
          // Store in cache
          this.preloadedImages.set(nextPhoto.url, img);
        };
        
        img.onerror = (error) => {
          console.warn(`Failed to preload photo ${nextIndex + 1}:`, error);
          // Don't show error to user, just log it
        };
        
        // Start loading
        img.src = nextPhoto.url;
      }
    }
    
    // Also preload previous photo if navigating backwards
    const prevIndex = this.currentPhotoIndex - 1;
    if (prevIndex >= 0) {
      const prevPhoto = this.photos[prevIndex];
      
      if (!this.preloadedImages.has(prevPhoto.url)) {
        const img = new Image();
        
        img.onload = () => {
          this.preloadedImages.set(prevPhoto.url, img);
        };
        
        img.onerror = (error) => {
          console.warn(`Failed to preload previous photo:`, error);
        };
        
        img.src = prevPhoto.url;
      }
    }
  }
  
  /**
   * Open photo uploader modal to add photos to the story
   * Requirements: 4.1
   */
  async openPhotoUploader(): Promise<void> {
    if (!this.story) return;
    
    // Pause auto-advance while uploading
    this.pauseAutoAdvance();
    
    // Create modal with PhotoUploaderComponent
    const modal = await this.modalController.create({
      component: PhotoUploaderComponent,
      componentProps: {
        storyId: this.story.id
      },
      cssClass: 'photo-uploader-modal'
    });
    
    await modal.present();
    
    // Wait for modal to close
    const { role } = await modal.onWillDismiss();
    
    // Reload story to get updated photos
    if (role === 'success') {
      await this.loadStory();
      // Mark that story was updated for parent components
      this.storyUpdated = true;
    } else {
      // Resume auto-advance if user cancelled
      this.startAutoAdvance();
    }
  }

  /**
   * Show action sheet menu with options
   */
  async showMenu(): Promise<void> {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      buttons: [
        {
          text: this.isEditMode ? 'Guardar orden' : 'Reordenar fotos',
          icon: this.isEditMode ? 'checkmark' : 'swap-vertical',
          handler: () => {
            this.toggleEditMode();
          }
        },
        {
          text: 'Añadir fotos',
          icon: 'add-circle',
          handler: () => {
            this.openPhotoUploader();
          }
        },
        {
          text: 'Eliminar foto actual',
          icon: 'trash',
          role: 'destructive',
          handler: () => {
            if (this.getCurrentPhoto()) {
              this.deletePhoto(this.getCurrentPhoto()!.id);
            }
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
}