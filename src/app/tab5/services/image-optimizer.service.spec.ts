import { TestBed } from '@angular/core/testing';
import { ImageOptimizerService } from './image-optimizer.service';

describe('ImageOptimizerService', () => {
  let service: ImageOptimizerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageOptimizerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('validateImage', () => {
    it('should accept valid JPEG image under 10MB', () => {
      const file = createMockFile('image/jpeg', 5 * 1024 * 1024); // 5MB
      expect(service.validateImage(file)).toBe(true);
    });

    it('should accept valid PNG image under 10MB', () => {
      const file = createMockFile('image/png', 5 * 1024 * 1024); // 5MB
      expect(service.validateImage(file)).toBe(true);
    });

    it('should accept valid WebP image under 10MB', () => {
      const file = createMockFile('image/webp', 5 * 1024 * 1024); // 5MB
      expect(service.validateImage(file)).toBe(true);
    });

    it('should reject image over 10MB', () => {
      const file = createMockFile('image/jpeg', 11 * 1024 * 1024); // 11MB
      expect(service.validateImage(file)).toBe(false);
    });

    it('should reject image exactly at 10MB limit', () => {
      const file = createMockFile('image/jpeg', 10 * 1024 * 1024 + 1); // 10MB + 1 byte
      expect(service.validateImage(file)).toBe(false);
    });

    it('should reject unsupported file type', () => {
      const file = createMockFile('image/gif', 1 * 1024 * 1024); // 1MB GIF
      expect(service.validateImage(file)).toBe(false);
    });

    it('should reject non-image file type', () => {
      const file = createMockFile('application/pdf', 1 * 1024 * 1024);
      expect(service.validateImage(file)).toBe(false);
    });

    it('should accept image at exactly 10MB', () => {
      const file = createMockFile('image/jpeg', 10 * 1024 * 1024); // Exactly 10MB
      expect(service.validateImage(file)).toBe(true);
    });
  });

  describe('getImageDimensions', () => {
    it('should return correct dimensions for an image', async () => {
      const file = await createMockImageFile(800, 600);
      const dimensions = await service.getImageDimensions(file);
      
      expect(dimensions.width).toBe(800);
      expect(dimensions.height).toBe(600);
    });

    it('should handle square images', async () => {
      const file = await createMockImageFile(500, 500);
      const dimensions = await service.getImageDimensions(file);
      
      expect(dimensions.width).toBe(500);
      expect(dimensions.height).toBe(500);
    });

    it('should handle portrait images', async () => {
      const file = await createMockImageFile(600, 800);
      const dimensions = await service.getImageDimensions(file);
      
      expect(dimensions.width).toBe(600);
      expect(dimensions.height).toBe(800);
    });

    it('should handle very large images', async () => {
      const file = await createMockImageFile(4000, 3000);
      const dimensions = await service.getImageDimensions(file);
      
      expect(dimensions.width).toBe(4000);
      expect(dimensions.height).toBe(3000);
    });
  });

  describe('compressImage', () => {
    it('should compress image larger than maxWidth', async () => {
      const file = await createMockImageFile(2400, 1800);
      const compressed = await service.compressImage(file, 1920, 0.85);
      
      expect(compressed).toBeTruthy();
      expect(compressed.size).toBeGreaterThan(0);
      expect(compressed.size).toBeLessThan(file.size);
    });

    it('should maintain aspect ratio when resizing', async () => {
      const file = await createMockImageFile(2400, 1800); // 4:3 ratio
      const compressed = await service.compressImage(file, 1920, 0.85);
      
      // Create image from blob to check dimensions
      const img = await createImageFromBlob(compressed);
      
      expect(img.width).toBe(1920);
      expect(img.height).toBe(1440); // Maintains 4:3 ratio
    });

    it('should not upscale images smaller than maxWidth', async () => {
      const file = await createMockImageFile(800, 600);
      const compressed = await service.compressImage(file, 1920, 0.85);
      
      const img = await createImageFromBlob(compressed);
      
      expect(img.width).toBe(800);
      expect(img.height).toBe(600);
    });

    it('should reject invalid image file', async () => {
      const file = createMockFile('application/pdf', 1024);
      
      await expectAsync(service.compressImage(file, 1920, 0.85))
        .toBeRejectedWithError('Invalid image file');
    });

    it('should use default parameters when not provided', async () => {
      const file = await createMockImageFile(2400, 1800);
      const compressed = await service.compressImage(file);
      
      expect(compressed).toBeTruthy();
      expect(compressed.size).toBeGreaterThan(0);
    });

    it('should handle square images correctly', async () => {
      const file = await createMockImageFile(2000, 2000);
      const compressed = await service.compressImage(file, 1920, 0.85);
      
      const img = await createImageFromBlob(compressed);
      
      expect(img.width).toBe(1920);
      expect(img.height).toBe(1920);
    });

    it('should handle portrait orientation', async () => {
      const file = await createMockImageFile(1800, 2400); // 3:4 ratio
      const compressed = await service.compressImage(file, 1920, 0.85);
      
      const img = await createImageFromBlob(compressed);
      
      expect(img.width).toBe(1800); // Width unchanged (under maxWidth)
      expect(img.height).toBe(2400);
    });
  });

  describe('generateThumbnail', () => {
    it('should generate square thumbnail of specified size', async () => {
      const file = await createMockImageFile(800, 600);
      const thumbnail = await service.generateThumbnail(file, 300);
      
      const img = await createImageFromBlob(thumbnail);
      
      expect(img.width).toBe(300);
      expect(img.height).toBe(300);
    });

    it('should use default size of 300px when not specified', async () => {
      const file = await createMockImageFile(800, 600);
      const thumbnail = await service.generateThumbnail(file);
      
      const img = await createImageFromBlob(thumbnail);
      
      expect(img.width).toBe(300);
      expect(img.height).toBe(300);
    });

    it('should handle landscape images', async () => {
      const file = await createMockImageFile(1600, 900);
      const thumbnail = await service.generateThumbnail(file, 200);
      
      const img = await createImageFromBlob(thumbnail);
      
      expect(img.width).toBe(200);
      expect(img.height).toBe(200);
    });

    it('should handle portrait images', async () => {
      const file = await createMockImageFile(900, 1600);
      const thumbnail = await service.generateThumbnail(file, 200);
      
      const img = await createImageFromBlob(thumbnail);
      
      expect(img.width).toBe(200);
      expect(img.height).toBe(200);
    });

    it('should handle square images', async () => {
      const file = await createMockImageFile(1000, 1000);
      const thumbnail = await service.generateThumbnail(file, 250);
      
      const img = await createImageFromBlob(thumbnail);
      
      expect(img.width).toBe(250);
      expect(img.height).toBe(250);
    });

    it('should reject invalid image file', async () => {
      const file = createMockFile('text/plain', 1024);
      
      await expectAsync(service.generateThumbnail(file, 300))
        .toBeRejectedWithError('Invalid image file');
    });

    it('should generate smaller file size than original', async () => {
      const file = await createMockImageFile(2000, 2000);
      const thumbnail = await service.generateThumbnail(file, 300);
      
      expect(thumbnail.size).toBeLessThan(file.size);
    });
  });

  describe('error handling', () => {
    it('should handle corrupted image data gracefully', async () => {
      const file = new File([new Uint8Array([0, 1, 2, 3])], 'corrupt.jpg', {
        type: 'image/jpeg',
      });
      
      await expectAsync(service.getImageDimensions(file))
        .toBeRejectedWithError('Failed to load image');
    });

    it('should handle empty file', async () => {
      const file = new File([], 'empty.jpg', { type: 'image/jpeg' });
      
      await expectAsync(service.getImageDimensions(file))
        .toBeRejectedWithError('Failed to load image');
    });
  });
});

// Helper functions

/**
 * Create a mock File object with specified type and size
 */
function createMockFile(type: string, size: number): File {
  const buffer = new ArrayBuffer(size);
  const blob = new Blob([buffer], { type });
  return new File([blob], 'test-file', { type });
}

/**
 * Create a real image file for testing
 * Uses canvas to generate a valid image
 */
async function createMockImageFile(
  width: number,
  height: number
): Promise<File> {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    throw new Error('Failed to get canvas context');
  }

  // Draw a simple pattern
  ctx.fillStyle = '#4CAF50';
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = '#FFC107';
  ctx.fillRect(width / 4, height / 4, width / 2, height / 2);

  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) {
          const file = new File([blob], 'test-image.jpg', {
            type: 'image/jpeg',
          });
          resolve(file);
        } else {
          reject(new Error('Failed to create blob'));
        }
      },
      'image/jpeg',
      0.95
    );
  });
}

/**
 * Create an HTMLImageElement from a Blob
 */
function createImageFromBlob(blob: Blob): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(blob);

    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };

    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('Failed to load image from blob'));
    };

    img.src = url;
  });
}
