import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  features = [
    { title: 'Project Management', description: 'Create and manage your projects efficiently' },
    { title: 'Task Tracking', description: 'Keep track of all your tasks in one place' },
    { title: 'Team Collaboration', description: 'Work together with your team seamlessly' }
  ];
}