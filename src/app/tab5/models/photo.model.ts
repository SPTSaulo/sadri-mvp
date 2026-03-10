import { StorageType } from './story.model';

export interface Photo {
  id: string;
  url: string;
  thumbnailUrl?: string;
  storageType: StorageType;
  order: number;
  uploadedAt: Date;
  size: number;
}
