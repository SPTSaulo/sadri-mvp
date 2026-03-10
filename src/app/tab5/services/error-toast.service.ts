import { Injectable, inject } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ErrorCode } from '../models/error-code.enum';

/**
 * ErrorToastService provides user-friendly error messages via Ionic toasts
 * 
 * Validates: Requirements 14.1, 14.2, 14.3, 14.5
 */
@Injectable({
  providedIn: 'root',
})
export class ErrorToastService {
  private readonly toastController = inject(ToastController);

  /**
   * Display an error toast with appropriate message based on error code
   * 
   * @param errorCode - The error code enum value
   * @param customMessage - Optional custom message to override default
   * @param duration - Toast duration in milliseconds (default: 3000)
   */
  async showError(
    errorCode: ErrorCode,
    customMessage?: string,
    duration: number = 3000
  ): Promise<void> {
    const message = customMessage || this.getErrorMessage(errorCode);
    
    const toast = await this.toastController.create({
      message,
      duration,
      position: 'bottom',
      cssClass: 'neutral-toast',
      buttons: [
        {
          icon: 'alert-circle',
          side: 'start'
        },
        {
          text: 'Cerrar',
          role: 'cancel',
        },
      ],
    });

    await toast.present();
  }

  /**
   * Display a success toast message
   * 
   * @param message - Success message to display
   * @param duration - Toast duration in milliseconds (default: 2000)
   */
  async showSuccess(message: string, duration: number = 2000): Promise<void> {
    const toast = await this.toastController.create({
      message,
      duration,
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
   * Display a warning toast message
   * 
   * @param message - Warning message to display
   * @param duration - Toast duration in milliseconds (default: 3000)
   */
  async showWarning(message: string, duration: number = 3000): Promise<void> {
    const toast = await this.toastController.create({
      message,
      duration,
      position: 'bottom',
      cssClass: 'neutral-toast',
      buttons: [
        {
          icon: 'warning',
          side: 'start'
        }
      ]
    });

    await toast.present();
  }

  /**
   * Display an error toast with retry button
   * 
   * @param errorCode - The error code enum value
   * @param retryCallback - Function to call when retry button is tapped
   * @param customMessage - Optional custom message
   */
  async showErrorWithRetry(
    errorCode: ErrorCode,
    retryCallback: () => void,
    customMessage?: string
  ): Promise<void> {
    const message = customMessage || this.getErrorMessage(errorCode);
    
    const toast = await this.toastController.create({
      message,
      duration: 5000,
      position: 'bottom',
      cssClass: 'neutral-toast',
      buttons: [
        {
          icon: 'alert-circle',
          side: 'start'
        },
        {
          text: 'Reintentar',
          handler: () => {
            retryCallback();
          },
        },
        {
          text: 'Cerrar',
          role: 'cancel',
        },
      ],
    });

    await toast.present();
  }

  /**
   * Get user-friendly error message for error code
   */
  private getErrorMessage(errorCode: ErrorCode): string {
    const errorMessages: Record<ErrorCode, string> = {
      [ErrorCode.NETWORK_TIMEOUT]: 'Error de conexión. Por favor, verifica tu conexión a internet.',
      [ErrorCode.STORAGE_QUOTA_EXCEEDED]: 'Límite de almacenamiento alcanzado. Usando almacenamiento local.',
      [ErrorCode.CLOUDINARY_QUOTA_EXCEEDED]: 'Límite de almacenamiento en la nube alcanzado. Usando almacenamiento local.',
      [ErrorCode.INVALID_IMAGE_FORMAT]: 'Formato de imagen no válido. Por favor, selecciona una imagen JPG o PNG.',
      [ErrorCode.IMAGE_TOO_LARGE]: 'La imagen es demasiado grande. El tamaño máximo es 10MB.',
      [ErrorCode.PERMISSION_DENIED]: 'Permiso denegado. Por favor, habilita los permisos en la configuración.',
      [ErrorCode.DATA_CORRUPTION]: 'Error al procesar los datos. Por favor, intenta nuevamente.',
      [ErrorCode.UNKNOWN_ERROR]: 'Ha ocurrido un error inesperado. Por favor, intenta nuevamente.',
    };

    return errorMessages[errorCode] || errorMessages[ErrorCode.UNKNOWN_ERROR];
  }

  /**
   * Log error to console with context
   * 
   * @param errorCode - The error code
   * @param context - Additional context information
   * @param error - The original error object
   */
  logError(errorCode: ErrorCode, context: string, error?: any): void {
    console.error(`[${errorCode}] ${context}`, error);
  }
}
