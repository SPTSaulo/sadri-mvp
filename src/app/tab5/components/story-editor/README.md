# StoryEditorComponent

Modal component for editing story title and cover image.

## Purpose

Provides a user interface for editing existing travel stories, allowing users to:
- Modify the story title
- Change the cover image
- Save changes to Firebase

## Requirements Validation

This component validates the following requirements:
- **Requirement 11.1**: Provide edit option for each story
- **Requirement 11.2**: Allow modification of story title
- **Requirement 11.3**: Allow changing the cover image
- **Requirement 11.4**: Update metadata in Firebase when changes saved
- **Requirement 11.5**: Display success message when changes saved

## Usage

The component is used as a modal and requires a `storyId` input:

```typescript
import { ModalController } from '@ionic/angular';
import { StoryEditorComponent } from './components/story-editor/story-editor.component';

// Open the editor modal
const modal = await this.modalController.create({
  component: StoryEditorComponent,
  componentProps: {
    storyId: 'story-id-here'
  }
});

await modal.present();

// Handle the result
const { data, role } = await modal.onWillDismiss();
if (role === 'save' && data) {
  // Story was updated, data contains the updated Story object
  console.log('Updated story:', data);
}
```

## Inputs

- `storyId: string` - The ID of the story to edit (required)

## Features

### Story Loading
- Loads story data from StoryService on initialization
- Displays loading spinner while fetching data
- Pre-fills form with current story title and cover image

### Title Editing
- Text input for story title
- Character counter (max 100 characters)
- Real-time validation

### Cover Image Selection
- Uses Capacitor Camera plugin to access photo library
- Displays preview of selected image
- Shows current cover if no new image selected
- Optimizes and compresses images before upload
- Generates thumbnail for storage efficiency

### Save Functionality
- Validates form before saving
- Checks if there are actual changes to save
- Uploads new cover image if selected
- Updates story metadata in Firestore
- Displays success toast message
- Returns updated story to parent component

### Error Handling
- Displays error messages for failed operations
- Handles loading errors gracefully
- Provides user-friendly error messages in Spanish

## Dependencies

- **StoryService**: For loading and updating story data
- **StorageService**: For uploading cover images
- **ImageOptimizerService**: For compressing and optimizing images
- **ModalController**: For modal lifecycle management
- **ToastController**: For displaying messages
- **Capacitor Camera**: For accessing device photo library

## Implementation Notes

1. **Image Optimization**: Images are compressed to 1920px max width and 85% quality before upload
2. **Thumbnail Generation**: A 300px thumbnail is generated for the cover image
3. **Storage Fallback**: Uses Firebase Storage with automatic IndexedDB fallback
4. **Validation**: Ensures title is not empty and has changes before allowing save
5. **User Feedback**: Provides loading states, disabled buttons, and toast messages

## File Structure

```
story-editor/
├── story-editor.component.ts       # Component logic
├── story-editor.component.html     # Template
├── story-editor.component.scss     # Styles
└── README.md                       # This file
```

## Styling

The component uses Ionic components and custom SCSS for:
- Responsive cover image preview (16:9 aspect ratio)
- Loading states with spinner
- Form layout with proper spacing
- Character counter display
- Button states (disabled, loading)

## Future Enhancements

Potential improvements for future iterations:
- Add ability to crop/rotate cover image
- Support for multiple cover image options
- Undo/redo functionality
- Auto-save draft changes
- Image filters or effects
