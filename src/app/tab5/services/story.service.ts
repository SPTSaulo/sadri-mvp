import { Injectable, inject } from '@angular/core';
import { Observable, BehaviorSubject, from, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Firestore, collection, collectionData, doc, docData, addDoc, updateDoc, deleteDoc, Timestamp } from '@angular/fire/firestore';
import { Story } from '../models/story.model';

/**
 * StoryService handles CRUD operations for travel stories using Firestore
 * 
 * Validates: Requirements 2.4, 3.3, 3.5, 8.3, 10.2, 10.3, 11.4, 12.3
 */
@Injectable({
  providedIn: 'root',
})
export class StoryService {
  private firestore = inject(Firestore);
  private storiesCollection = collection(this.firestore, 'stories');
  
  // Sync status observable for synchronization indicator
  private syncStatusSubject = new BehaviorSubject<boolean>(false);
  public syncStatus$ = this.syncStatusSubject.asObservable();

  /**
   * Get all stories from Firestore, sorted by creation date (newest first)
   * 
   * Validates: Requirements 2.1, 2.4, 8.3
   */
  getAll(): Observable<Story[]> {
    this.syncStatusSubject.next(true);
    
    // Temporarily remove orderBy to test connection
    return collectionData(this.storiesCollection, { idField: 'id' }).pipe(
      map((stories: any[]) => {
        console.log('Firestore stories received:', stories);
        // Sort in memory instead
        const mapped = stories.map(story => this.convertFirestoreToStory(story));
        return mapped.sort((a, b) => 
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      }),
      tap(() => {
        console.log('Sync complete');
        this.syncStatusSubject.next(false);
      }),
      catchError(error => {
        console.error('Firestore error:', error);
        this.syncStatusSubject.next(false);
        return throwError(() => error);
      })
    );
  }

  /**
   * Get a single story by ID from Firestore
   * 
   * Validates: Requirements 2.4, 8.3
   */
  get(id: string): Observable<Story> {
    this.syncStatusSubject.next(true);
    
    const storyDoc = doc(this.firestore, `stories/${id}`);
    
    return docData(storyDoc, { idField: 'id' }).pipe(
      map((story: any) => this.convertFirestoreToStory(story)),
      tap(() => this.syncStatusSubject.next(false)),
      catchError(error => {
        this.syncStatusSubject.next(false);
        return throwError(() => error);
      })
    );
  }

  /**
   * Create a new story in Firestore
   * 
   * Validates: Requirements 3.3, 3.5, 8.3
   */
  async create(story: Partial<Story>): Promise<string> {
    try {
      const newStory = {
        title: story.title || '',
        coverUrl: story.coverUrl || '',
        coverStorageType: story.coverStorageType || 'cloudinary',
        photoCount: story.photoCount || 0,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
        photos: story.photos || []
      };
      
      const docRef = await addDoc(this.storiesCollection, newStory);
      return docRef.id;
    } catch (error) {
      console.error('Error creating story:', error);
      throw error;
    }
  }

  /**
   * Update an existing story in Firestore
   * 
   * Validates: Requirements 11.2, 11.3, 11.5, 12.3
   */
  async update(story: Story): Promise<void> {
    try {
      const storyDoc = doc(this.firestore, `stories/${story.id}`);
      
      const updateData = {
        title: story.title,
        coverUrl: story.coverUrl,
        coverStorageType: story.coverStorageType,
        photoCount: story.photoCount,
        photos: story.photos,
        updatedAt: Timestamp.now()
      };
      
      await updateDoc(storyDoc, updateData);
    } catch (error) {
      console.error('Error updating story:', error);
      throw error;
    }
  }

  /**
   * Delete a story from Firestore
   * Note: Photo cleanup from storage should be handled by StorageService
   * 
   * Validates: Requirements 15.3
   */
  async delete(id: string): Promise<void> {
    try {
      const storyDoc = doc(this.firestore, `stories/${id}`);
      await deleteDoc(storyDoc);
    } catch (error) {
      console.error('Error deleting story:', error);
      throw error;
    }
  }

  /**
   * Reorder photos within a story in Firestore
   * 
   * Validates: Requirements 12.1, 12.2, 12.3, 12.4
   */
  async reorderPhotos(storyId: string, photoIds: string[]): Promise<void> {
    try {
      const storyDoc = doc(this.firestore, `stories/${storyId}`);
      
      // Get current story
      const storySnapshot = await from(docData(storyDoc, { idField: 'id' })).toPromise();
      const story = this.convertFirestoreToStory(storySnapshot as any);
      
      // Reorder photos based on the provided photoIds array
      const reorderedPhotos = photoIds.map((photoId, index) => {
        const photo = story.photos.find(p => p.id === photoId);
        if (!photo) {
          throw new Error(`Photo with ID ${photoId} not found in story`);
        }
        return { ...photo, order: index };
      });
      
      // Update the story with reordered photos
      await updateDoc(storyDoc, {
        photos: reorderedPhotos,
        updatedAt: Timestamp.now()
      });
    } catch (error) {
      console.error('Error reordering photos:', error);
      throw error;
    }
  }

  /**
   * Convert Firestore document to Story object
   */
  private convertFirestoreToStory(data: any): Story {
    return {
      id: data.id,
      title: data.title,
      coverUrl: data.coverUrl,
      coverStorageType: data.coverStorageType,
      photoCount: data.photoCount,
      createdAt: data.createdAt?.toDate() || new Date(),
      updatedAt: data.updatedAt?.toDate() || new Date(),
      photos: (data.photos || []).map((photo: any) => ({
        ...photo,
        uploadedAt: photo.uploadedAt?.toDate ? photo.uploadedAt.toDate() : new Date(photo.uploadedAt)
      }))
    };
  }
}