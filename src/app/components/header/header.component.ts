import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  onLogout() {
    alert('User logged out')
  }

  // currentTime = new Date();
  currentTime = '400'

  constructor() {
    // setInterval(() => this.currentTime = new Date(), 1000);
  }
  @Output() toggleSidebar = new EventEmitter<void>();

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }
}
