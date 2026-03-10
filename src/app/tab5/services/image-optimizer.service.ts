import { Injectable } from '@angular/core';

/**
 * ImageOptimizerService handles client-side image compression and optimization
 * before uploading to Firebase Storage or IndexedDB.
 * 
 * Validates: Requirements 13.1, 13.2, 13.3
 */
@Injectable({
  providedIn: 'root',
})
export class ImageOptimizerService {
  private readonly MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
  private readonly ALLOWED_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
  private readonly WEBP_SUPPORTED = this.checkWebPSupport();

  /**
   * Compress an image to reduce file size while maintaining quality
   * Resizes to max 1920px width and compresses to 85% quality
   * Converts to WebP format if browser supports it
   * 
   * @param file - The image file to compress
   * @param maxWidth - Maximum width in pixels (default: 1920)
   * @param quality - Compression quality 0-1 (default: 0.85)
   * @returns Promise resolving to compressed image Blob
   */
  async compressImage(
    file: File,
    maxWidth: number = 1920,
    quality: number = 0.85
  ): Promise<Blob> {
    // Validate input
    if (!this.validateImage(file)) {
      throw new Error('Invalid image file');
    }

    // Load image
    const img = await this.loadImage(file);
    const dimensions = await this.getImageDimensions(file);

    // Calculate new dimensions maintaining aspect ratio
    let newWidth = dimensions.width;
    let newHeight = dimensions.height;

    if (newWidth > maxWidth) {
      const ratio = maxWidth / newWidth;
      newWidth = maxWidth;
      newHeight = Math.round(newHeight * ratio);
    }

    // Create canvas and draw resized image
    const canvas = document.createElement('canvas');
    canvas.width = newWidth;
    canvas.height = newHeight;

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      throw new Error('Failed to get canvas context');
    }

    ctx.drawImage(img, 0, 0, newWidth, newHeight);

    // Convert to blob with compression
    const mimeType = this.WEBP_SUPPORTED ? 'image/webp' : 'image/jpeg';
    return this.canvasToBlob(canvas, mimeType, quality);
  }

  /**
   * Generate a thumbnail from an image file
   * Creates a square thumbnail by cropping to center
   * 
   * @param file - The image file to create thumbnail from
   * @param size - Thumbnail size in pixels (default: 300)
   * @returns Promise resolving to thumbnail Blob
   */
  async generateThumbnail(file: File, size: number = 300): Promise<Blob> {
    // Validate input
    if (!this.validateImage(file)) {
      throw new Error('Invalid image file');
    }

    // Load image
    const img = await this.loadImage(file);
    const dimensions = await this.getImageDimensions(file);

    // Calculate crop dimensions (center crop to square)
    const sourceSize = Math.min(dimensions.width, dimensions.height);
    const sourceX = (dimensions.width - sourceSize) / 2;
    const sourceY = (dimensions.height - sourceSize) / 2;

    // Create canvas for thumbnail
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      throw new Error('Failed to get canvas context');
    }

    // Draw cropped and resized image
    ctx.drawImage(
      img,
      sourceX,
      sourceY,
      sourceSize,
      sourceSize,
      0,
      0,
      size,
      size
    );

    // Convert to blob
    const mimeType = this.WEBP_SUPPORTED ? 'image/webp' : 'image/jpeg';
    return this.canvasToBlob(canvas, mimeType, 0.85);
  }

  /**
   * Validate image file type and size
   * Checks if file is an allowed image type and under 10MB
   * 
   * @param file - The file to validate
   * @returns true if valid, false otherwise
   */
  validateImage(file: File): boolean {
    // Check file type
    if (!this.ALLOWED_TYPES.includes(file.type)) {
      return false;
    }

    // Check file size (10MB limit)
    if (file.size > this.MAX_FILE_SIZE) {
      return false;
    }

    return true;
  }

  /**
   * Get dimensions of an image file
   * 
   * @param file - The image file
   * @returns Promise resolving to {width, height}
   */
  async getImageDimensions(file: File): Promise<{ width: number; height: number }> {
    const img = await this.loadImage(file);
    return {
      width: img.naturalWidth,
      height: img.naturalHeight,
    };
  }

  /**
   * Load an image file into an HTMLImageElement
   * 
   * @param file - The image file to load
   * @returns Promise resolving to HTMLImageElement
   */
  private loadImage(file: File): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      const url = URL.createObjectURL(file);

      img.onload = () => {
        URL.revokeObjectURL(url);
        resolve(img);
      };

      img.onerror = () => {
        URL.revokeObjectURL(url);
        reject(new Error('Failed to load image'));
      };

      img.src = url;
    });
  }

  /**
   * Convert canvas to Blob
   * 
   * @param canvas - The canvas element
   * @param mimeType - Output MIME type
   * @param quality - Compression quality 0-1
   * @returns Promise resolving to Blob
   */
  private canvasToBlob(
    canvas: HTMLCanvasElement,
    mimeType: string,
    quality: number
  ): Promise<Blob> {
    return new Promise((resolve, reject) => {
      canvas.toBlob(
        (blob) => {
          if (blob) {
            resolve(blob);
          } else {
            reject(new Error('Failed to convert canvas to blob'));
          }
        },
        mimeType,
        quality
      );
    });
  }

  /**
   * Check if browser supports WebP format
   * 
   * @returns true if WebP is supported
   */
  private checkWebPSupport(): boolean {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    
    // Check if toDataURL supports WebP
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }
}
