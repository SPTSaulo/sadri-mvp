import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Story } from '../../models/story.model';

/**
 * StoryCardComponent
 * 
 * Displays individual story cover in grid with loading indicators
 * 
 * Validates: Requirements 13.5, 15.2
 */
@Component({
  selector: 'app-story-card',
  templateUrl: './story-card.component.html',
  styleUrls: ['./story-card.component.scss'],
  standalone: false,
})
export class StoryCardComponent {
  @Input() story!: Story;
  
  @Output() tap = new EventEmitter<string>();
  @Output() edit = new EventEmitter<string>();
  @Output() delete = new EventEmitter<string>();

  public isImageLoading = true;

  constructor(private actionSheetController: ActionSheetController) {}

  onCardTap(): void {
    this.tap.emit(this.story.id);
  }

  async onLongPress(): Promise<void> {
    const actionSheet = await this.actionSheetController.create({
      header: this.story.title,
      buttons: [
        {
          text: 'Edit',
          icon: 'create-outline',
          handler: () => {
            this.edit.emit(this.story.id);
          }
        },
        {
          text: 'Delete',
          icon: 'trash-outline',
          role: 'destructive',
          handler: () => {
            this.delete.emit(this.story.id);
          }
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel'
        }
      ]
    });

    await actionSheet.present();
  }

  /**
   * Handle image load event
   * Hides loading indicator when image successfully loads
   * 
   * Validates: Requirements 13.5
   */
  onImageLoad(): void {
    this.isImageLoading = false;
  }

  /**
   * Handle image error event
   * Hides loading indicator when image fails to load
   * 
   * Validates: Requirements 13.5, 14.3
   */
  onImageError(): void {
    this.isImageLoading = false;
  }
}
