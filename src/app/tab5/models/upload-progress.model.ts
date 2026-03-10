export type UploadStatus = 'pending' | 'uploading' | 'complete' | 'error';

export interface UploadProgress {
  photoId: string;
  fileName: string;
  progress: number;
  status: UploadStatus;
  error?: string;
  url?: string;
  storageType?: 'firebase' | 'indexeddb' | 'cloudinary';
}
