import { Component, EventEmitter, Output, ChangeDetectorRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebar = new EventEmitter<void>();

  currentTime: Date = new Date();
  private timeIntervalId: any;

  constructor() {}

  ngOnInit(): void {
    this.startTimeInterval();
  }

  ngOnDestroy(): void {
    if (this.timeIntervalId) {
      clearInterval(this.timeIntervalId);
    }
  }

  private startTimeInterval(): void {
    this.timeIntervalId = setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }

  onToggleSidebar(): void {
    this.toggleSidebar.emit();
  }

  onLogout(): void {
    alert('User logged out');
  }
}
