# StoryViewerComponent

Fullscreen story viewer component that displays photos with auto-advance and manual navigation.

## Features

- **Fullscreen Photo Display**: Shows one photo at a time in fullscreen mode
- **Auto-Advance**: Automatically advances to the next photo after 5 seconds
- **Progress Indicators**: Visual progress bars for each photo showing remaining time
- **Photo Counter**: Displays current position (e.g., "3 / 10")
- **Manual Navigation**: 
  - Tap right half to advance to next photo
  - Tap left half to go back to previous photo
  - Stays on first photo when tapping left at the beginning
  - Closes viewer when tapping right on the last photo
- **Timer Reset**: Auto-advance timer resets on user interaction

## Usage

The component is designed to be opened as a modal:

```typescript
import { ModalController } from '@ionic/angular';
import { StoryViewerComponent } from './components/story-viewer/story-viewer.component';

async openStory(storyId: string) {
  const modal = await this.modalController.create({
    component: StoryViewerComponent,
    componentProps: {
      storyId: storyId
    },
    cssClass: 'fullscreen-modal'
  });
  
  await modal.present();
}
```

## Input Properties

- `storyId: string` - The ID of the story to display

## Requirements Implemented

- **5.1**: Open story and display photos as fullscreen cards
- **5.2**: Display one photo at a time
- **5.3**: Show progress indicator for each photo
- **5.4**: Display current photo number and total count
- **5.5**: Return to main view when viewer closes
- **6.1**: Auto-advance after 5 seconds
- **6.4**: Reset timer on user interaction
- **6.5**: Display progress bar showing remaining time
- **7.1**: Tap right to advance
- **7.2**: Tap left to go back
- **7.3**: Stay on first photo when tapping left
- **7.4**: Close viewer when tapping right on last photo
- **7.5**: Pause auto-advance during tap

## Implementation Details

### Auto-Advance System

The component uses RxJS intervals for timing:
- Main timer: 5-second interval for photo advancement
- Progress timer: 100ms interval for smooth progress bar updates
- Both timers are properly cleaned up on component destroy

### Manual Navigation

Tap detection divides the screen into two zones:
- Left half (0-50%): Previous photo
- Right half (50-100%): Next photo

The component handles both mouse and touch events for cross-platform compatibility.

### Progress Bar

Each photo has its own progress indicator:
- Active photo: Shows animated progress from 0-100%
- Completed photos: Shown at 100% opacity
- Upcoming photos: Shown at 30% opacity

## Styling

The component uses a fullscreen overlay with:
- Black background for photo focus
- Semi-transparent overlays for UI elements
- Responsive design for all screen sizes
- Touch-friendly tap zones
