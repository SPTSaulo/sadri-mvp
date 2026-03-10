import { Photo } from './photo.model';

export type StorageType = 'firebase' | 'indexeddb' | 'cloudinary';

export interface Story {
  id: string;
  title: string;
  coverUrl: string;
  coverStorageType: StorageType;
  photoCount: number;
  createdAt: Date;
  updatedAt: Date;
  photos: Photo[];
}
