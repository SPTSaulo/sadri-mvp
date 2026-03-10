import { TestBed } from '@angular/core/testing';
import { StorageService } from './storage.service';
import { CloudinaryService } from './cloudinary.service';
import { of, throwError } from 'rxjs';

describe('StorageService', () => {
  let service: StorageService;
  let cloudinaryServiceSpy: jasmine.SpyObj<CloudinaryService>;

  beforeEach(() => {
    const cloudinarySpy = jasmine.createSpyObj('CloudinaryService', ['uploadPhoto']);

    TestBed.configureTestingModule({
      providers: [
        StorageService,
        { provide: CloudinaryService, useValue: cloudinarySpy }
      ]
    });

    service = TestBed.inject(StorageService);
    cloudinaryServiceSpy = TestBed.inject(CloudinaryService) as jasmine.SpyObj<CloudinaryService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('uploadPhoto', () => {
    it('should upload photo to Cloudinary', () => {
      const mockFile = new Blob(['test'], { type: 'image/jpeg' });
      const mockProgress = {
        photoId: 'test-id',
        fileName: 'test.jpg',
        progress: 100,
        status: 'complete' as const,
        url: 'https://res.cloudinary.com/test/image/upload/test.jpg',
        storageType: 'cloudinary' as const
      };

      cloudinaryServiceSpy.uploadPhoto.and.returnValue(of(mockProgress));

      service.uploadPhoto(mockFile, 'stories/test-story/test.jpg').subscribe(progress => {
        expect(progress).toEqual(mockProgress);
      });

      expect(cloudinaryServiceSpy.uploadPhoto).toHaveBeenCalledWith(
        mockFile,
        'test',
        'test.jpg'
      );
    });

    it('should fallback to IndexedDB when Cloudinary fails', (done) => {
      const mockFile = new Blob(['test'], { type: 'image/jpeg' });
      
      cloudinaryServiceSpy.uploadPhoto.and.returnValue(
        throwError(() => new Error('Cloudinary upload failed'))
      );

      service.uploadPhoto(mockFile, 'stories/test-story/test.jpg').subscribe({
        next: (progress) => {
          if (progress.status === 'complete') {
            expect(progress.storageType).toBe('indexeddb');
            expect(progress.url).toContain('indexeddb://');
            done();
          }
        },
        error: () => fail('Should not error when fallback succeeds')
      });
    });
  });

  describe('downloadPhoto', () => {
    it('should download photo from Cloudinary URL', async () => {
      const mockBlob = new Blob(['image data'], { type: 'image/jpeg' });
      const url = 'https://res.cloudinary.com/test/image/upload/photo.jpg';

      spyOn(window, 'fetch').and.returnValue(
        Promise.resolve(new Response(mockBlob, { status: 200 }))
      );

      const result = await service.downloadPhoto(url);

      expect(result).toEqual(mockBlob);
      expect(window.fetch).toHaveBeenCalledWith(url);
    });

    it('should throw error if download fails', async () => {
      const url = 'https://res.cloudinary.com/test/image/upload/photo.jpg';

      spyOn(window, 'fetch').and.returnValue(
        Promise.resolve(new Response(null, { status: 404, statusText: 'Not Found' }))
      );

      try {
        await service.downloadPhoto(url);
        fail('Should have thrown error');
      } catch (error: any) {
        expect(error.message).toContain('Failed to download photo');
      }
    });

    it('should retrieve photo from IndexedDB for indexeddb:// URLs', async () => {
      const mockBlob = new Blob(['image data'], { type: 'image/jpeg' });
      const url = 'indexeddb://test-key';

      // Mock IndexedDB operations
      spyOn(service as any, 'getFromIndexedDB').and.returnValue(Promise.resolve(mockBlob));

      const result = await service.downloadPhoto(url);

      expect(result).toEqual(mockBlob);
      expect((service as any).getFromIndexedDB).toHaveBeenCalledWith('test-key');
    });
  });

  describe('deletePhoto', () => {
    it('should delete photo from IndexedDB when storageType is indexeddb', async () => {
      const url = 'indexeddb://test-key';
      
      spyOn(service as any, 'deleteFromIndexedDB').and.returnValue(Promise.resolve());

      await service.deletePhoto(url, 'indexeddb');

      expect((service as any).deleteFromIndexedDB).toHaveBeenCalledWith('test-key');
    });

    it('should log warning for Cloudinary deletion', async () => {
      const url = 'https://res.cloudinary.com/test/image/upload/photo.jpg';
      
      spyOn(console, 'warn');

      await service.deletePhoto(url, 'cloudinary');

      expect(console.warn).toHaveBeenCalledWith('Cloudinary deletion requires server-side implementation');
    });
  });

  describe('checkStorageQuota', () => {
    it('should return available true by default', async () => {
      const result = await service.checkStorageQuota();
      
      expect(result.available).toBe(true);
    });
  });
});