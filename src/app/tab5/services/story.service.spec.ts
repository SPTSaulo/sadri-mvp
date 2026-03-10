import { TestBed } from '@angular/core/testing';
import { StoryService } from './story.service';
import { Story } from '../models/story.model';

describe('StoryService', () => {
  let service: StoryService;

  const mockStory: Story = {
    id: 'test-story-id',
    title: 'Test Story',
    coverUrl: 'https://example.com/cover.jpg',
    coverStorageType: 'cloudinary',
    photoCount: 3,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01'),
    photos: [
      {
        id: 'photo-1',
        url: 'https://example.com/photo1.jpg',
        storageType: 'cloudinary',
        order: 0,
        uploadedAt: new Date('2024-01-01'),
        size: 1024
      },
      {
        id: 'photo-2',
        url: 'https://example.com/photo2.jpg',
        storageType: 'cloudinary',
        order: 1,
        uploadedAt: new Date('2024-01-01'),
        size: 2048
      },
      {
        id: 'photo-3',
        url: 'https://example.com/photo3.jpg',
        storageType: 'cloudinary',
        order: 2,
        uploadedAt: new Date('2024-01-01'),
        size: 1536
      }
    ]
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoryService]
    });
    service = TestBed.inject(StoryService);
    
    // Clear localStorage before each test
    localStorage.clear();
  });

  afterEach(() => {
    // Clean up localStorage after each test
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('create', () => {
    it('should create a new story and return its ID', async () => {
      const newStory: Partial<Story> = {
        title: 'New Story',
        coverUrl: 'https://example.com/new-cover.jpg',
        coverStorageType: 'cloudinary',
        photoCount: 0,
        photos: [],
      };

      const storyId = await service.create(newStory);

      expect(storyId).toBeTruthy();
      expect(typeof storyId).toBe('string');
    });

    it('should save story to localStorage', async () => {
      const newStory: Partial<Story> = {
        title: 'New Story',
        coverUrl: 'https://example.com/new-cover.jpg',
        coverStorageType: 'cloudinary',
        photoCount: 0,
        photos: [],
      };

      await service.create(newStory);

      const stored = localStorage.getItem('travel-stories');
      expect(stored).toBeTruthy();
      
      const stories = JSON.parse(stored!);
      expect(stories).toHaveSize(1);
      expect(stories[0].title).toBe('New Story');
    });
  });

  describe('getAll', () => {
    it('should return empty array when no stories exist', (done) => {
      service.getAll().subscribe(stories => {
        expect(stories).toEqual([]);
        done();
      });
    });

    it('should return all stories sorted by creation date', async () => {
      // Create test stories
      const story1 = { ...mockStory, title: 'Story 1' };
      const story2 = { ...mockStory, title: 'Story 2', createdAt: new Date('2024-01-02') };
      
      await service.create(story1);
      await service.create(story2);

      service.getAll().subscribe(stories => {
        expect(stories).toHaveSize(2);
        // Should be sorted by creation date (newest first)
        expect(stories[0].title).toBe('Story 2');
        expect(stories[1].title).toBe('Story 1');
      });
    });
  });

  describe('get', () => {
    it('should return a specific story by ID', async () => {
      const storyId = await service.create(mockStory);

      service.get(storyId).subscribe(story => {
        expect(story).toBeTruthy();
        expect(story.id).toBe(storyId);
        expect(story.title).toBe(mockStory.title);
      });
    });

    it('should throw error for non-existent story', () => {
      service.get('non-existent-id').subscribe({
        next: () => fail('Should have thrown error'),
        error: (error) => {
          expect(error.message).toContain('not found');
        }
      });
    });
  });

  describe('update', () => {
    it('should update an existing story', async () => {
      const storyId = await service.create(mockStory);
      
      const updatedStory: Story = {
        ...mockStory,
        id: storyId,
        title: 'Updated Title'
      };

      await service.update(updatedStory);

      service.get(storyId).subscribe(story => {
        expect(story.title).toBe('Updated Title');
      });
    });

    it('should throw error for non-existent story', async () => {
      const nonExistentStory: Story = {
        ...mockStory,
        id: 'non-existent-id'
      };

      try {
        await service.update(nonExistentStory);
        fail('Should have thrown error');
      } catch (error: any) {
        expect(error.message).toContain('not found');
      }
    });
  });

  describe('delete', () => {
    it('should delete a story', async () => {
      const storyId = await service.create(mockStory);

      await service.delete(storyId);

      service.get(storyId).subscribe({
        next: () => fail('Should have thrown error'),
        error: (error) => {
          expect(error.message).toContain('not found');
        }
      });
    });

    it('should throw error for non-existent story', async () => {
      try {
        await service.delete('non-existent-id');
        fail('Should have thrown error');
      } catch (error: any) {
        expect(error.message).toContain('not found');
      }
    });
  });

  describe('reorderPhotos', () => {
    it('should reorder photos in a story', async () => {
      const storyId = await service.create(mockStory);
      const photoIds = ['photo-3', 'photo-1', 'photo-2'];

      await service.reorderPhotos(storyId, photoIds);

      service.get(storyId).subscribe(story => {
        expect(story.photos[0].id).toBe('photo-3');
        expect(story.photos[0].order).toBe(0);
        expect(story.photos[1].id).toBe('photo-1');
        expect(story.photos[1].order).toBe(1);
        expect(story.photos[2].id).toBe('photo-2');
        expect(story.photos[2].order).toBe(2);
      });
    });

    it('should throw error for non-existent story', async () => {
      try {
        await service.reorderPhotos('non-existent-id', ['photo-1']);
        fail('Should have thrown error');
      } catch (error: any) {
        expect(error.message).toContain('not found');
      }
    });
  });
});