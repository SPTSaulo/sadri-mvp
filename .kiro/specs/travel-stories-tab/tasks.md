# Implementation Plan: Travel Stories Tab

## Overview

This implementation plan breaks down the Travel Stories Tab feature into discrete coding tasks. The feature adds a fifth tab to the Angular + Ionic application with Instagram-style story functionality, Firebase Storage integration, and IndexedDB fallback. Each task builds incrementally on previous work, with property-based tests integrated throughout to validate correctness properties early.

## Tasks

- [x] 1. Set up project structure and data models
  - Create `src/app/tab5/` directory structure with page, components, services, and models folders
  - Define `Story` interface in `models/story.model.ts` with all required fields (id, title, coverUrl, coverStorageType, photoCount, createdAt, updatedAt, photos)
  - Define `Photo` interface in `models/photo.model.ts` with all required fields (id, url, thumbnailUrl, storageType, order, uploadedAt, size)
  - Define `UploadProgress` interface in `models/upload-progress.model.ts`
  - Define `StorageType` type and `ErrorCode` enum
  - _Requirements: 3.3, 4.5, 8.3, 8.4_

- [x] 2. Implement core services
  - [x] 2.1 Create StoryService with Firebase Firestore integration
    - Implement `getAll()` method returning Observable<Story[]> sorted by createdAt descending
    - Implement `get(id)` method returning Observable<Story>
    - Implement `create(story)` method returning Promise<string> with generated ID
    - Implement `update(story)` method returning Promise<void>
    - Implement `delete(id)` method with cascade deletion logic
    - Implement `reorderPhotos(storyId, photoIds)` method
    - Use Angular Fire's `collectionData` with `idField: 'id'` for automatic ID mapping
    - Add error handling with exponential backoff retry logic (3 attempts: 1s, 2s, 4s)
    - _Requirements: 2.4, 3.3, 3.5, 8.3, 10.2, 10.3, 11.4, 12.3_


  - [x] 2.4 Create ImageOptimizerService for image processing
    - Implement `compressImage(file, maxWidth, quality)` method that resizes to max 1920px width and compresses to 85% quality
    - Implement `generateThumbnail(file, size)` method that creates 300px thumbnails
    - Implement `validateImage(file)` method checking file type and 10MB size limit
    - Implement `getImageDimensions(file)` method
    - Use Canvas API for image manipulation
    - Convert to WebP format if browser supports it
    - _Requirements: 13.1, 13.2, 13.3_


- [x] 3. Implement StorageService with Firebase and IndexedDB
  - [x] 3.1 Create StorageService with Firebase Storage integration
    - Implement `uploadPhoto(file, path)` method returning Observable<UploadProgress>
    - Implement `downloadPhoto(url)` method for caching
    - Implement `deletePhoto(url, storageType)` method handling both Firebase and IndexedDB
    - Implement `checkStorageQuota()` method to check Firebase quota before upload
    - Add upload progress tracking with percentage updates
    - Use Firebase Storage SDK with proper error handling
    - _Requirements: 4.4, 8.1, 8.2, 10.5, 15.1_

  - [x] 3.2 Add IndexedDB fallback storage
    - Create IndexedDB database 'travel-stories' with 'photos' object store
    - Implement `saveToIndexedDB(file, key)` method returning Promise<string> with IndexedDB URL
    - Implement `getFromIndexedDB(key)` method returning Promise<Blob>
    - Implement `clearCache()` method for cache management
    - Add automatic fallback when Firebase quota exceeded or upload fails after retries
    - Store `storageType` in photo metadata for retrieval routing
    - _Requirements: 8.6, 14.4_

- [x] 5. Create Tab5Page (main stories view)
  - [x] 5.1 Generate tab5 module and configure routing
    - Run `ionic generate page tab5` to create page structure
    - Add tab5 route to `tabs-routing.module.ts`
    - Add fifth tab button to `tabs.page.html` with travel/stories icon
    - Configure lazy loading for tab5 module
    - _Requirements: 1.1, 1.2, 1.3, 1.4_

  - [x] 5.2 Implement Tab5Page component logic
    - Inject StoryService in constructor
    - Implement `ngOnInit()` to load stories using `storyService.getAll()`
    - Implement `createStory()` method to navigate to story creation flow
    - Implement `openStory(storyId)` method to navigate to StoryViewerComponent
    - Implement `deleteStory(storyId)` method with confirmation dialog
    - Implement `editStory(storyId)` method to open StoryEditorComponent
    - Add pull-to-refresh functionality
    - _Requirements: 1.3, 2.1, 2.5, 3.1, 10.1, 10.6, 11.1_

  - [x] 5.3 Create Tab5Page template with grid layout
    - Use `ion-grid` with responsive columns for story covers
    - Add empty state message when no stories exist
    - Add floating action button (FAB) for creating new stories
    - Implement pull-to-refresh with `ion-refresher`
    - Add loading spinner for initial load
    - _Requirements: 2.1, 2.2, 3.1, 15.2_

- [x] 6. Create StoryCardComponent
  - [x] 6.1 Implement StoryCardComponent
    - Generate component with `ionic generate component tab5/components/story-card`
    - Add `@Input() story: Story` property
    - Display cover image using `ion-img` with loading placeholder
    - Display story title as overlay
    - Display photo count badge
    - Add long-press menu for edit/delete options using `ion-action-sheet`
    - Emit events for tap, edit, and delete actions
    - _Requirements: 2.3, 10.1, 11.1_

- [x] 7. Implement story creation flow
  - [x] 7.1 Create story creation modal
    - Create modal component for story creation
    - Add form with title input field
    - Add button to select cover image using Capacitor Camera/Filesystem plugin
    - Display selected cover image preview
    - Implement form validation (non-empty title, cover image required)
    - _Requirements: 3.1, 3.2, 3.4_

  - [x] 7.2 Wire story creation to services
    - On cover image selection, call `imageOptimizerService.compressImage()` and `generateThumbnail()`
    - Upload cover image using `storageService.uploadPhoto()`
    - Create story metadata using `storyService.create()`
    - Show upload progress indicator
    - Handle upload errors with retry option
    - Close modal and refresh story list on success
    - _Requirements: 3.3, 3.5, 4.6, 13.1, 13.3, 14.2, 15.1_

- [x] 8. Create PhotoUploaderComponent
  - [x] 8.1 Implement PhotoUploaderComponent
    - Generate component with `ionic generate component tab5/components/photo-uploader`
    - Add `@Input() storyId: string` property
    - Implement `selectPhotos()` method using Capacitor plugin for multiple photo selection
    - Implement `optimizeImages(files)` method calling ImageOptimizerService for each file
    - Implement `uploadPhotos(optimizedFiles)` method with progress tracking
    - Display upload progress for each photo with progress bars
    - Display photo count (e.g., "Uploading 3 of 10")
    - Handle upload errors with retry button
    - Update story photoCount after successful uploads
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 14.2, 15.1, 15.5_

- [x] 10. Create StoryViewerComponent
  - [x] 10.1 Implement StoryViewerComponent structure
    - Generate component with `ionic generate component tab5/components/story-viewer`
    - Add `@Input() storyId: string` property
    - Load story and photos in `ngOnInit()` using StoryService
    - Initialize `currentPhotoIndex` to 0
    - Display current photo in fullscreen using `ion-img`
    - Add close button overlay
    - Display photo counter (e.g., "3 / 10")
    - Add progress indicators for each photo
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_

  - [x] 10.2 Implement auto-advance functionality
    - Create `autoAdvanceTimer` property as RxJS Subscription
    - Implement `startAutoAdvance()` method using `interval(5000)` that calls `nextPhoto()`
    - Implement `pauseAutoAdvance()` method to stop timer
    - Implement `resetAutoAdvance()` method to restart timer from zero
    - Start auto-advance when component initializes
    - Stop auto-advance when component destroys
    - _Requirements: 6.1, 6.4_

  - [x] 10.3 Add progress bar for auto-advance
    - Create `progressPercentage` property
    - Update progress every 100ms using RxJS interval
    - Display progress bar showing remaining time for current photo
    - Reset progress when advancing to next photo
    - _Requirements: 6.5_

  - [x] 10.6 Implement manual navigation
    - Implement `handleTap(event)` method that checks tap position (left/right half)
    - Implement `nextPhoto()` method that increments index or closes viewer if last photo
    - Implement `previousPhoto()` method that decrements index or stays at 0 if first photo
    - Call `resetAutoAdvance()` after each manual navigation
    - Implement `closeViewer()` method to navigate back to main view
    - _Requirements: 6.4, 7.1, 7.2, 7.3, 7.4, 7.5_


- [x] 11. Implement photo management features
  - [x] 11.1 Add delete photo functionality to StoryViewerComponent
    - Add delete button overlay on current photo
    - Implement `deletePhoto(photoId)` method with confirmation dialog
    - Call `storageService.deletePhoto()` to remove from storage
    - Update story metadata to remove photo from photos array
    - Update photoCount in story
    - Navigate to next photo or close viewer if last photo deleted
    - _Requirements: 10.4, 10.5, 10.6_

  - [x] 11.4 Implement photo reordering in edit mode
    - Add edit mode toggle button in StoryViewerComponent
    - In edit mode, display photos in grid with drag handles
    - Use Ionic's reorder component or implement custom drag-and-drop
    - Implement `reorderPhotos(event)` method to update photo order
    - Call `storyService.reorderPhotos()` to persist new order
    - Exit edit mode and refresh viewer
    - _Requirements: 12.1, 12.2, 12.3, 12.4_

- [x] 12. Create StoryEditorComponent
  - [x] 12.1 Implement StoryEditorComponent
    - Generate component with `ionic generate component tab5/components/story-editor`
    - Add `@Input() storyId: string` property
    - Load story data in `ngOnInit()` using StoryService
    - Display form with title input (pre-filled with current title)
    - Add button to change cover image
    - Implement `updateTitle(newTitle)` method
    - Implement `changeCover()` method to select and upload new cover
    - Implement `saveChanges()` method calling `storyService.update()`
    - Display success message on save
    - _Requirements: 11.1, 11.2, 11.3, 11.4, 11.5_

- [x] 13. Implement comprehensive error handling
  - [x] 13.1 Add error handling UI components
    - Create error toast service for displaying error messages
    - Create connection status indicator component
    - Add retry button component for failed operations
    - Implement error logging with ErrorCode enum
    - _Requirements: 14.1, 14.2, 14.3, 14.5_

  - [x] 13.2 Integrate error handling across all components
    - Add network error handling with connection status indicator
    - Add storage error handling with quota warnings
    - Add permission error handling with settings link
    - Add data integrity error handling with silent cleanup
    - Implement exponential backoff retry for network operations
    - _Requirements: 14.1, 14.2, 14.4, 14.5_

- [x] 14. Implement loading indicators and progress tracking
  - [x] 14.1 Add loading indicators to all async operations
    - Add loading spinner to Tab5Page during story fetch
    - Add loading placeholder to StoryCardComponent during image load
    - Add upload progress bars to PhotoUploaderComponent
    - Add sync indicator for Firebase synchronization
    - Add progress bar to StoryViewerComponent for auto-advance
    - _Requirements: 13.5, 15.1, 15.2, 15.3, 15.4, 15.5_

- [x] 15. Implement story deletion with cascade cleanup
  - [x] 15.1 Enhance delete functionality in Tab5Page
    - Update `deleteStory(storyId)` to show confirmation dialog
    - Load story with all photos before deletion
    - Delete all photos from storage (both Firebase and IndexedDB)
    - Delete story metadata from Firestore
    - Show deletion progress indicator
    - Refresh story list after deletion
    - _Requirements: 10.1, 10.2, 10.3, 10.6_

- [x] 17. Performance optimization
  - [x] 17.1 Implement virtual scrolling for story grid
    - Use Ionic's virtual scroll for large story collections
    - Implement lazy loading for images
    - Add pagination if story count exceeds 50
    - _Requirements: 2.1_

  - [x] 17.2 Optimize image loading
    - Implement progressive loading for Photo_Cards
    - Use CDN for Firebase Storage URLs if available
    - Preload next photo in story viewer for smooth transitions
    - _Requirements: 13.4, 13.5_

- [x] 19. Final integration and wiring
  - [x] 19.1 Wire all components together
    - Ensure navigation flows work correctly between all components
    - Verify data flows correctly through services
    - Verify Firebase Storage rules and Firestore security rules
    - Configure CORS for Firebase Storage bucket
    - _Requirements: All requirements_

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- All property tests are tagged with format: `Feature: travel-stories-tab, Property {number}: {property_text}`
- Implementation uses TypeScript with Angular + Ionic framework
- Firebase integration uses @angular/fire v19
- Checkpoints ensure incremental validation and provide opportunities for user feedback
