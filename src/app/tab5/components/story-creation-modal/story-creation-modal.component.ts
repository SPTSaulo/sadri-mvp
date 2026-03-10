import { Component, inject } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-story-creation-modal',
  templateUrl: './story-creation-modal.component.html',
  styleUrls: ['./story-creation-modal.component.scss'],
  standalone: false,
})
export class StoryCreationModalComponent {
  private readonly modalController = inject(ModalController);
  private readonly toastController = inject(ToastController);

  public title = '';
  public coverImageUrl: string | null = null;
  public coverImageFile: Blob | null = null;
  public isSelectingImage = false;

  /**
   * Select cover image using Capacitor Camera/Filesystem plugin
   */
  async selectCoverImage() {
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
        this.coverImageUrl = image.dataUrl;
        
        // Convert data URL to Blob for upload
        this.coverImageFile = await this.dataUrlToBlob(image.dataUrl);
      }
    } catch (error) {
      console.error('Error selecting image:', error);
      await this.showToast('Error al seleccionar la imagen. Por favor, inténtalo de nuevo.');
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
   * Check if form is valid
   */
  isFormValid(): boolean {
    return this.title.trim().length > 0 && this.coverImageFile !== null;
  }

  /**
   * Cancel and close modal
   */
  cancel() {
    this.modalController.dismiss(null, 'cancel');
  }

  /**
   * Create story and close modal with data
   */
  async create() {
    if (!this.isFormValid()) {
      await this.showToast('Por favor, completa todos los campos requeridos.');
      return;
    }

    // Return the story data to the parent component
    this.modalController.dismiss(
      {
        title: this.title.trim(),
        coverImageFile: this.coverImageFile,
        coverImageUrl: this.coverImageUrl,
      },
      'create'
    );
  }

  /**
   * Show toast message
   */
  private async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
      position: 'bottom',
    });
    await toast.present();
  }
}
