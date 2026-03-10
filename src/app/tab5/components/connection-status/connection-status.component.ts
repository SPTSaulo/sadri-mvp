import { Component, OnInit, OnDestroy, inject, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
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
  private readonly cdr = inject(ChangeDetectorRef);
  private syncSubscription?: Subscription;
  
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
    this.syncSubscription = this.storyService.syncStatus$.subscribe(syncing => {
      this.isSyncing = syncing;
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy() {
    window.removeEventListener('online', this.handleOnline);
    window.removeEventListener('offline', this.handleOffline);
    this.syncSubscription?.unsubscribe();
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
