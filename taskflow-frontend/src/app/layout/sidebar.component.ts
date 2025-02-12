import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  navItems = [
    { path: '/home', label: 'Home', icon: 'home' },
    { path: '/projects', label: 'Projects', icon: 'folder' },
    { path: '/tasks', label: 'Tasks', icon: 'task' }
  ];

  constructor(private router: Router) {}

  isActive(path: string): boolean {
    return this.router.url === path;
  }
}