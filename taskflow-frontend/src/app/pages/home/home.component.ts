import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [RouterLink]
})
export class HomeComponent {
  recentProjects = [
    { id: 1, name: 'Progetto Alpha', tasks: 12, completion: 75 },
    { id: 2, name: 'Progetto Beta', tasks: 8, completion: 45 },
    { id: 3, name: 'Progetto Gamma', tasks: 15, completion: 30 }
  ];

  quickActions = [
    { label: 'Nuovo Progetto', icon: '📁', route: '/projects/new' },
    { label: 'Nuova Attività', icon: '✓', route: '/tasks/new' },
    { label: 'Dashboard', icon: '📊', route: '/dashboard' }
  ];
}