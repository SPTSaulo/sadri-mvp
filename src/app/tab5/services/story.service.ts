import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of, throwError } from 'rxjs';
import { Story } from '../models/story.model';

/**
 * StoryService handles CRUD operations for travel stories using local storage
 * 
 * Validates: Requirements 2.4, 3.3, 3.5, 8.3, 10.2, 10.3, 11.4, 12.3
 */
@Injectable({
  providedIn: 'root',
})
export class StoryService {
  private readonly STORAGE_KEY = 'travel-stories';
  
  // Sync status observable for synchronization indicator
  private syncStatusSubject = new BehaviorSubject<boolean>(false);
  public syncStatus$ = this.syncStatusSubject.asObservable();

  /**
   * Get all stories from local storage, sorted by creation date (newest first)
   * 
   * Validates: Requirements 2.1, 2.4, 8.3
   */
  getAll(): Observable<Story[]> {
    this.syncStatusSubject.next(true);
    
    try {
      const stories = this.getStoriesFromStorage();
      const sortedStories = stories.sort((a, b) => 
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      
      this.syncStatusSubject.next(false);
      return of(sortedStories);
    } catch (error) {
      this.syncStatusSubject.next(false);
      return throwError(() => error);
    }
  }

  /**
   * Get a single story by ID from local storage
   * 
   * Validates: Requirements 2.4, 8.3
   */
  get(id: string): Observable<Story> {
    this.syncStatusSubject.next(true);
    
    try {
      const stories = this.getStoriesFromStorage();
      const story = stories.find(s => s.id === id);
      
      this.syncStatusSubject.next(false);
      
      if (!story) {
        return throwError(() => new Error(`Story with ID ${id} not found`));
      }
      
      return of(story);
    } catch (error) {
      this.syncStatusSubject.next(false);
      return throwError(() => error);
    }
  }

  /**
   * Create a new story in local storage
   * 
   * Validates: Requirements 3.3, 3.5, 8.3
   */
  async create(story: Partial<Story>): Promise<string> {
    try {
      const stories = this.getStoriesFromStorage();
      const newId = this.generateId();
      
      const newStory: Story = {
        id: newId,
        title: story.title || '',
        coverUrl: story.coverUrl || '',
        coverStorageType: story.coverStorageType || 'cloudinary',
        photoCount: story.photoCount || 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        photos: story.photos || []
      };
      
      stories.push(newStory);
      this.saveStoriesToStorage(stories);
      
      return newId;
    } catch (error) {
      console.error('Error creating story:', error);
      throw error;
    }
  }

  /**
   * Update an existing story in local storage
   * 
   * Validates: Requirements 11.2, 11.3, 11.5, 12.3
   */
  async update(story: Story): Promise<void> {
    try {
      const stories = this.getStoriesFromStorage();
      const index = stories.findIndex(s => s.id === story.id);
      
      if (index === -1) {
        throw new Error(`Story with ID ${story.id} not found`);
      }
      
      const updatedStory = {
        ...story,
        updatedAt: new Date()
      };
      
      stories[index] = updatedStory;
      this.saveStoriesToStorage(stories);
    } catch (error) {
      console.error('Error updating story:', error);
      throw error;
    }
  }

  /**
   * Delete a story from local storage
   * Note: Photo cleanup from storage should be handled by StorageService
   * 
   * Validates: Requirements 15.3
   */
  async delete(id: string): Promise<void> {
    try {
      const stories = this.getStoriesFromStorage();
      const filteredStories = stories.filter(s => s.id !== id);
      
      if (filteredStories.length === stories.length) {
        throw new Error(`Story with ID ${id} not found`);
      }
      
      this.saveStoriesToStorage(filteredStories);
    } catch (error) {
      console.error('Error deleting story:', error);
      throw error;
    }
  }

  /**
   * Reorder photos within a story in local storage
   * 
   * Validates: Requirements 12.1, 12.2, 12.3, 12.4
   */
  async reorderPhotos(storyId: string, photoIds: string[]): Promise<void> {
    try {
      const stories = this.getStoriesFromStorage();
      const story = stories.find(s => s.id === storyId);
      
      if (!story) {
        throw new Error(`Story with ID ${storyId} not found`);
      }
      
      // Reorder photos based on the provided photoIds array
      const reorderedPhotos = photoIds.map((photoId, index) => {
        const photo = story.photos.find(p => p.id === photoId);
        if (!photo) {
          throw new Error(`Photo with ID ${photoId} not found in story`);
        }
        return { ...photo, order: index };
      });
      
      // Update the story with reordered photos
      story.photos = reorderedPhotos;
      story.updatedAt = new Date();
      
      this.saveStoriesToStorage(stories);
    } catch (error) {
      console.error('Error reordering photos:', error);
      throw error;
    }
  }

  /**
   * Get stories from localStorage
   */
  private getStoriesFromStorage(): Story[] {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (!stored) return [];
      
      const stories = JSON.parse(stored);
      // Convert date strings back to Date objects
      return stories.map((story: any) => ({
        ...story,
        createdAt: new Date(story.createdAt),
        updatedAt: new Date(story.updatedAt),
        photos: story.photos.map((photo: any) => ({
          ...photo,
          uploadedAt: new Date(photo.uploadedAt)
        }))
      }));
    } catch (error) {
      console.error('Error reading stories from storage:', error);
      return [];
    }
  }

  /**
   * Save stories to localStorage
   */
  private saveStoriesToStorage(stories: Story[]): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(stories));
    } catch (error) {
      console.error('Error saving stories to storage:', error);
      throw error;
    }
  }

  /**
   * Generate a unique ID for new stories
   */
  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
}