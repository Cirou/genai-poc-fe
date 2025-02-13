import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive]
})
export class SidebarComponent {
  menuItems = [
    { path: '/home', icon: '🏠', label: 'Home' },
    { path: '/projects', icon: '📁', label: 'Progetti' },
    { path: '/tasks', icon: '✓', label: 'Attività' }
  ];
}