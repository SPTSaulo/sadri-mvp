import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * RetryButtonComponent provides a reusable retry button for failed operations
 * 
 * Validates: Requirements 14.2
 */
@Component({
  selector: 'app-retry-button',
  templateUrl: './retry-button.component.html',
  styleUrls: ['./retry-button.component.scss'],
  standalone: false,
})
export class RetryButtonComponent {
  @Input() disabled = false;
  @Input() loading = false;
  @Input() text = 'Reintentar';
  @Input() icon = 'refresh-outline';
  @Input() color = 'primary';
  @Input() size: 'small' | 'default' | 'large' = 'default';
  @Output() retry = new EventEmitter<void>();

  constructor() { }

  onRetry() {
    if (!this.disabled && !this.loading) {
      this.retry.emit();
    }
  }
}
