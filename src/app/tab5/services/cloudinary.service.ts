import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { UploadProgress } from '../models/upload-progress.model';
import { cloudinaryConfig } from '../../../environments/cloudinary.config';

/**
 * CloudinaryService handles photo uploads to Cloudinary (free tier: 25GB storage, no credit card)
 * Sign up at: https://cloudinary.com/users/register/free
 */
@Injectable({
  providedIn: 'root',
})
export class CloudinaryService {
  private readonly CLOUD_NAME = cloudinaryConfig.cloudName;
  private readonly UPLOAD_PRESET = cloudinaryConfig.uploadPreset;

  /**
   * Upload a photo to Cloudinary
   */
  uploadPhoto(file: Blob, photoId: string, fileName: string): Observable<UploadProgress> {
    const subject = new Subject<UploadProgress>();

    subject.next({
      photoId,
      fileName,
      progress: 0,
      status: 'pending',
    });

    this.uploadToCloudinary(file, subject, photoId, fileName);

    return subject.asObservable();
  }

  private async uploadToCloudinary(
    file: Blob,
    subject: Subject<UploadProgress>,
    photoId: string,
    fileName: string
  ): Promise<void> {
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', this.UPLOAD_PRESET);
      formData.append('public_id', photoId);

      const xhr = new XMLHttpRequest();
      const url = `https://api.cloudinary.com/v1_1/${this.CLOUD_NAME}/image/upload`;

      xhr.open('POST', url, true);

      // Track upload progress
      xhr.upload.addEventListener('progress', (e) => {
        if (e.lengthComputable) {
          const progress = Math.round((e.loaded / e.total) * 100);
          subject.next({
            photoId,
            fileName,
            progress,
            status: 'uploading',
          });
        }
      });

      xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          subject.next({
            photoId,
            fileName,
            progress: 100,
            status: 'complete',
            url: response.secure_url,
            storageType: 'cloudinary',
          });
          subject.complete();
        } else {
          throw new Error(`Upload failed: ${xhr.statusText}`);
        }
      });

      xhr.addEventListener('error', () => {
        subject.next({
          photoId,
          fileName,
          progress: 0,
          status: 'error',
          error: 'Network error during upload',
        });
        subject.error(new Error('Network error'));
      });

      xhr.send(formData);
    } catch (error) {
      console.error('Cloudinary upload error:', error);
      subject.next({
        photoId,
        fileName,
        progress: 0,
        status: 'error',
        error: 'Failed to upload to Cloudinary',
      });
      subject.error(error);
    }
  }

  /**
   * Delete a photo from Cloudinary
   * Note: Requires authentication token for deletion
   */
  async deletePhoto(publicId: string): Promise<void> {
    console.warn('Cloudinary deletion requires server-side implementation with API secret');
    // Deletion must be done server-side for security
  }
}
