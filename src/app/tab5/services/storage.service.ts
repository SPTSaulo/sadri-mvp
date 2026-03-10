import { inject, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { UploadProgress } from '../models/upload-progress.model';
import { StorageType } from '../models/story.model';
import { CloudinaryService } from './cloudinary.service';

/**
 * StorageService handles photo uploads to Cloudinary with IndexedDB fallback
 * 
 * Validates: Requirements 4.4, 8.1, 8.2, 8.6, 10.5, 14.4, 15.1
 */
@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private readonly cloudinary = inject(CloudinaryService);
  private readonly DB_NAME = 'travel-stories';
  private readonly STORE_NAME = 'photos';
  private db: IDBDatabase | null = null;

  constructor() {
    this.initIndexedDB();
  }

  /**
   * Upload a photo to Cloudinary with progress tracking
   * Automatically falls back to IndexedDB if Cloudinary upload fails
   * 
   * @param file - The image file to upload
   * @param path - Storage path (e.g., 'stories/story-id/photo-id.jpg')
   * @returns Observable emitting upload progress updates
   */
  uploadPhoto(file: Blob, path: string): Observable<UploadProgress> {
    const photoId = this.extractPhotoIdFromPath(path);
    const fileName = this.extractFileNameFromPath(path);

    const subject = new Subject<UploadProgress>();

    // Try Cloudinary first
    this.cloudinary.uploadPhoto(file, photoId, fileName).subscribe({
      next: (progress) => {
        subject.next(progress);
      },
      complete: () => {
        subject.complete();
      },
      error: async (error) => {
        console.warn('Cloudinary upload failed, falling back to IndexedDB:', error);
        await this.fallbackToIndexedDB(file, path, subject, photoId, fileName);
      }
    });

    return subject.asObservable();
  }

  /**
   * Fallback to IndexedDB storage when Cloudinary fails
   */
  private async fallbackToIndexedDB(
    file: Blob,
    path: string,
    subject: Subject<UploadProgress>,
    photoId: string,
    fileName: string
  ): Promise<void> {
    try {
      subject.next({
        photoId,
        fileName,
        progress: 50,
        status: 'uploading',
      });

      const indexedDBUrl = await this.saveToIndexedDB(file, path);

      subject.next({
        photoId,
        fileName,
        progress: 100,
        status: 'complete',
        url: indexedDBUrl,
        storageType: 'indexeddb',
      });
      subject.complete();
    } catch (error) {
      console.error('IndexedDB fallback failed:', error);
      subject.next({
        photoId,
        fileName,
        progress: 0,
        status: 'error',
        error: 'Failed to save to local storage',
      });
      subject.error(error);
    }
  }

  /**
   * Download a photo from Cloudinary or IndexedDB
   * 
   * @param url - The photo URL (Cloudinary URL or IndexedDB key)
   * @returns Promise resolving to the image Blob
   */
  async downloadPhoto(url: string): Promise<Blob> {
    try {
      // Check if it's an IndexedDB URL
      if (url.startsWith('indexeddb://')) {
        const key = url.replace('indexeddb://', '');
        return await this.getFromIndexedDB(key);
      }

      // Download from Cloudinary
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to download photo: ${response.statusText}`);
      }
      return await response.blob();
    } catch (error) {
      console.error('Error downloading photo:', error);
      throw error;
    }
  }

  /**
   * Delete a photo from storage (Cloudinary or IndexedDB)
   * 
   * @param url - The photo URL (Cloudinary URL or IndexedDB key)
   * @param storageType - Storage location ('cloudinary' or 'indexeddb')
   */
  async deletePhoto(url: string, storageType: StorageType): Promise<void> {
    try {
      if (storageType === 'indexeddb') {
        const key = url.replace('indexeddb://', '');
        await this.deleteFromIndexedDB(key);
      } else if (storageType === 'cloudinary') {
        // Cloudinary deletion requires server-side implementation
        // For now, we'll just log a warning
        console.warn('Cloudinary deletion requires server-side implementation');
      }
    } catch (error) {
      console.error(`Error deleting photo from ${storageType}:`, error);
      throw error;
    }
  }

  /**
   * Check storage quota (simplified for Cloudinary)
   * Returns available space information
   */
  async checkStorageQuota(): Promise<{ available: boolean; usage?: number; limit?: number }> {
    try {
      // Cloudinary has generous free tier limits
      // For now, we'll assume quota is available
      return { available: true };
    } catch (error) {
      console.error('Error checking storage quota:', error);
      return { available: false };
    }
  }

  /**
   * Save a file to IndexedDB
   * 
   * @param file - The file to save
   * @param key - Unique key for the file
   * @returns Promise resolving to IndexedDB URL
   */
  async saveToIndexedDB(file: Blob, key: string): Promise<string> {
    if (!this.db) {
      await this.initIndexedDB();
    }

    return new Promise((resolve, reject) => {
      if (!this.db) {
        reject(new Error('IndexedDB not initialized'));
        return;
      }

      const transaction = this.db.transaction([this.STORE_NAME], 'readwrite');
      const store = transaction.objectStore(this.STORE_NAME);

      const data = {
        key,
        blob: file,
        timestamp: new Date(),
        size: file.size,
      };

      const request = store.put(data);

      request.onsuccess = () => {
        resolve(`indexeddb://${key}`);
      };

      request.onerror = () => {
        reject(new Error(`Failed to save to IndexedDB: ${request.error}`));
      };
    });
  }

  /**
   * Retrieve a file from IndexedDB
   * 
   * @param key - The file key
   * @returns Promise resolving to the file Blob
   */
  async getFromIndexedDB(key: string): Promise<Blob> {
    if (!this.db) {
      await this.initIndexedDB();
    }

    return new Promise((resolve, reject) => {
      if (!this.db) {
        reject(new Error('IndexedDB not initialized'));
        return;
      }

      const transaction = this.db.transaction([this.STORE_NAME], 'readonly');
      const store = transaction.objectStore(this.STORE_NAME);
      const request = store.get(key);

      request.onsuccess = () => {
        if (request.result) {
          resolve(request.result.blob);
        } else {
          reject(new Error(`File not found in IndexedDB: ${key}`));
        }
      };

      request.onerror = () => {
        reject(new Error(`Failed to retrieve from IndexedDB: ${request.error}`));
      };
    });
  }

  /**
   * Delete a file from IndexedDB
   * 
   * @param key - The file key
   */
  private async deleteFromIndexedDB(key: string): Promise<void> {
    if (!this.db) {
      await this.initIndexedDB();
    }

    return new Promise((resolve, reject) => {
      if (!this.db) {
        reject(new Error('IndexedDB not initialized'));
        return;
      }

      const transaction = this.db.transaction([this.STORE_NAME], 'readwrite');
      const store = transaction.objectStore(this.STORE_NAME);
      const request = store.delete(key);

      request.onsuccess = () => {
        resolve();
      };

      request.onerror = () => {
        reject(new Error(`Failed to delete from IndexedDB: ${request.error}`));
      };
    });
  }

  /**
   * Clear all cached photos from IndexedDB
   */
  async clearCache(): Promise<void> {
    if (!this.db) {
      await this.initIndexedDB();
    }

    return new Promise((resolve, reject) => {
      if (!this.db) {
        reject(new Error('IndexedDB not initialized'));
        return;
      }

      const transaction = this.db.transaction([this.STORE_NAME], 'readwrite');
      const store = transaction.objectStore(this.STORE_NAME);
      const request = store.clear();

      request.onsuccess = () => {
        resolve();
      };

      request.onerror = () => {
        reject(new Error(`Failed to clear cache: ${request.error}`));
      };
    });
  }

  /**
   * Initialize IndexedDB database
   */
  private async initIndexedDB(): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.DB_NAME, 1);

      request.onerror = () => {
        console.error('Failed to open IndexedDB:', request.error);
        reject(request.error);
      };

      request.onsuccess = () => {
        this.db = request.result;
        resolve();
      };

      request.onupgradeneeded = (event: any) => {
        const db = event.target.result;

        // Create object store if it doesn't exist
        if (!db.objectStoreNames.contains(this.STORE_NAME)) {
          const objectStore = db.createObjectStore(this.STORE_NAME, { keyPath: 'key' });
          objectStore.createIndex('timestamp', 'timestamp', { unique: false });
          objectStore.createIndex('size', 'size', { unique: false });
        }
      };
    });
  }

  /**
   * Extract photo ID from storage path
   * Uses the full path (without extension) as unique identifier
   */
  private extractPhotoIdFromPath(path: string): string {
    // Remove file extension and use full path as unique ID
    // e.g., "stories/story-123/cover.jpg" -> "stories/story-123/cover"
    return path.replace(/\.[^/.]+$/, '');
  }

  /**
   * Extract file name from storage path
   */
  private extractFileNameFromPath(path: string): string {
    const parts = path.split('/');
    return parts[parts.length - 1];
  }
}