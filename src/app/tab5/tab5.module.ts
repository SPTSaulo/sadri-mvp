import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab5PageRoutingModule } from './tab5-routing.module';

import { Tab5Page } from './tab5.page';
import { StoryCardComponent } from './components/story-card/story-card.component';
import { StoryCreationModalComponent } from './components/story-creation-modal/story-creation-modal.component';
import { StoryViewerComponent } from './components/story-viewer/story-viewer.component';
import { StoryEditorComponent } from './components/story-editor/story-editor.component';
import { ConnectionStatusComponent } from './components/connection-status/connection-status.component';
import { RetryButtonComponent } from './components/retry-button/retry-button.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab5PageRoutingModule
  ],
  declarations: [
    Tab5Page, 
    StoryCardComponent, 
    StoryCreationModalComponent,
    StoryViewerComponent,
    StoryEditorComponent,
    ConnectionStatusComponent,
    RetryButtonComponent
  ]
})
export class Tab5PageModule {}
