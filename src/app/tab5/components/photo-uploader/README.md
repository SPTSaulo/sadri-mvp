# PhotoUploaderComponent

A standalone Angular + Ionic component for uploading multiple photos to a story with progress tracking, error handling, and retry functionality.

## Features

- **Multiple Photo Selection**: Uses Capacitor Camera plugin to select multiple photos from device gallery
- **Image Optimization**: Automatically compresses images before upload using ImageOptimizerService
- **Progress Tracking**: Displays individual progress bars for each photo being uploaded
- **Upload Summary**: Shows "Uploading X of Y" counter
- **Error Handling**: Displays error messages with retry button
- **Firebase Storage**: Uploads to Firebase Storage with automatic IndexedDB fallback
- **Photo Metadata**: Saves photo metadata to Firestore after successful upload

## Requirements Validated

- 4.1: Provide button to add photos to current story
- 4.2: Open device photo picker when button tapped
- 4.3: Allow selection of multiple photos simultaneously
- 4.4: Upload selected photos to Firebase Storage
- 4.5: Save photo metadata (URL, order, timestamp) to Firebase Database
- 4.6: Display error and retry on upload failure
- 14.2: Display upload error with retry
- 15.1: Display upload progress indicator
- 15.5: Display number of photos being uploaded (e.g., "Uploading 3 of 10")

## Usage

### Import the Component

Since this is a standalone component, you can import it directly in your component or module:

```typescript
import { PhotoUploaderComponent } from './components/photo-uploader/photo-uploader.component';

@Component({
  selector: 'app-story-viewer',
  templateUrl: './story-viewer.component.html',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    PhotoUploaderComponent  // Import the standalone component
  ],
})
export class StoryViewerComponent {
  storyId = 'story-123';
}
```

### Use in Template

```html
<app-photo-uploader [storyId]="storyId"></app-photo-uploader>
```

### Example in a Story Viewer Page

```typescript
// story-viewer.page.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoUploaderComponent } from '../components/photo-uploader/photo-uploader.component';

@Component({
  selector: 'app-story-viewer',
  templateUrl: './story-viewer.page.html',
  standalone: true,
  imports: [CommonModule, IonicModule, PhotoUploaderComponent],
})
export class StoryViewerPage implements OnInit {
  storyId: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.storyId = this.route.snapshot.paramMap.get('id') || '';
  }
}
```

```html
<!-- story-viewer.page.html -->
<ion-header>
  <ion-toolbar>
    <ion-title>Story Viewer</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <!-- Story photos display here -->
  
  <!-- Photo uploader at the bottom -->
  <app-photo-uploader [storyId]="storyId"></app-photo-uploader>
</ion-content>
```

## Component API

### Inputs

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `storyId` | `string` | Yes | The ID of the story to add photos to |

### Methods

| Method | Description |
|--------|-------------|
| `selectPhotos()` | Opens device photo picker for multiple selection |
| `retryUpload()` | Retries failed uploads |
| `getUploadSummary()` | Returns upload progress summary string |

### Properties

| Property | Type | Description |
|----------|------|-------------|
| `uploadProgresses` | `UploadProgress[]` | Array of upload progress objects |
| `isUploading` | `boolean` | Whether upload is in progress |
| `uploadError` | `string \| null` | Current error message, if any |

## Upload Flow

1. User taps "Add Photos" button
2. Device photo picker opens (Capacitor Camera plugin)
3. User selects multiple photos
4. Component converts photos to File objects
5. Images are optimized using ImageOptimizerService
6. Photos are uploaded to Firebase Storage (or IndexedDB fallback)
7. Progress bars update for each photo
8. Photo metadata is saved to Firestore
9. Story's photoCount is updated
10. Upload completes or error is displayed

## Error Handling

The component handles several error scenarios:

- **Photo Selection Failed**: Displays error message
- **Image Optimization Failed**: Skips invalid images, continues with others
- **Upload Failed**: Shows error with retry button
- **Metadata Save Failed**: Logs error and shows retry option

## Styling

The component uses Ionic CSS variables for theming. You can customize the appearance by overriding these variables in your global styles:

```scss
app-photo-uploader {
  --upload-progress-bg: var(--ion-color-light);
  --upload-complete-bg: var(--ion-color-success-tint);
  --upload-error-bg: var(--ion-color-danger-tint);
}
```

## Dependencies

- `@capacitor/camera`: For photo selection
- `@angular/fire/storage`: For Firebase Storage uploads
- `@angular/fire/firestore`: For metadata storage
- `ImageOptimizerService`: For image compression
- `StorageService`: For upload management
- `StoryService`: For story metadata updates

## Notes

- The component automatically cleans up subscriptions on destroy
- Upload progress is tracked individually for each photo
- Failed uploads can be retried by tapping the retry button
- The component uses IndexedDB as a fallback when Firebase quota is exceeded
