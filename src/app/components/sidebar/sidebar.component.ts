import { Component, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() isSidebarOpen: boolean = false;

  menuItems = [
    { label: 'Dashboard', route: '/dashboard', icon: 'assets/dashboard.svg', isActive: false },
    { label: 'Timesheets', route: '/timesheets', icon: 'assets/timesheets.svg', isActive: false },
    {
      label: 'Survey Dashboard', route: '', icon: 'assets/survey.svg', isActive: false, isExpanded: false, children: [
        { label: 'Clients', route: '/clients', icon: '', isActive: false },
        { label: 'Submissions', route: '/submissions', icon: '', isActive: false }
      ]
    },
    { label: 'Settings', route: '/settings', icon: 'assets/settings.svg', isActive: false }
  ];

  // Store hovered item
  hoveredItem: any = null;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.menuItems.forEach(item => {
        item.isActive = this.router.isActive(item.route, false);
        if (item.children) {
          item.children.forEach(subItem => {
            subItem.isActive = this.router.isActive(subItem.route, false);
          });
        }
      });
    });
  }

  onHover(item: any) {
    this.hoveredItem = item;
  }

  onLeave(item: any) {
    this.hoveredItem = null;
  }

  isHovered(item: any) {
    return this.hoveredItem === item;
  }

  anyChildActive(item: any) {
    return item.children && item.children.some((subItem: any) => subItem.isActive);
  }
}
