import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { StoryService } from '../../services/story.service';

/**
 * ConnectionStatusComponent displays network connection status and Firebase sync indicator
 * Shows a banner when offline or connection is lost
 * Shows sync indicator when syncing with Firebase
 * 
 * Validates: Requirements 14.1, 15.3
 */
@Component({
  selector: 'app-connection-status',
  templateUrl: './connection-status.component.html',
  styleUrls: ['./connection-status.component.scss'],
  standalone: false,
})
export class ConnectionStatusComponent implements OnInit, OnDestroy {
  private readonly storyService = inject(StoryService);
  
  isOnline = true;
  showBanner = false;
  isSyncing = false;

  constructor() { }

  ngOnInit() {
    // Check initial network status
    this.isOnline = navigator.onLine;
    this.showBanner = !this.isOnline;

    // Listen for network status changes
    window.addEventListener('online', this.handleOnline);
    window.addEventListener('offline', this.handleOffline);

    // Subscribe to sync status from StoryService
    this.storyService.syncStatus$.subscribe(syncing => {
      this.isSyncing = syncing;
    });
  }

  ngOnDestroy() {
    window.removeEventListener('online', this.handleOnline);
    window.removeEventListener('offline', this.handleOffline);
  }

  private handleOnline = () => {
    const wasOffline = !this.isOnline;
    this.isOnline = true;
    
    if (wasOffline) {
      // Connection restored - show briefly then hide
      this.showBanner = true;
      setTimeout(() => {
        this.showBanner = false;
      }, 3000);
    }
  };

  private handleOffline = () => {
    this.isOnline = false;
    this.showBanner = true;
  };

  dismissBanner() {
    this.showBanner = false;
  }
}
