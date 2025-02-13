import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  menuItems = [
    { path: '/', label: 'Home', icon: 'home' },
    { path: '/projects', label: 'Projects', icon: 'folder' },
    { path: '/tasks', label: 'Tasks', icon: 'list' }
  ];
}