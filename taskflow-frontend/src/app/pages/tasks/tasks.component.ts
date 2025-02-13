import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  tasks = [
    { id: 1, title: 'Design Homepage', project: 'Website Redesign', priority: 'High', status: 'Todo' },
    { id: 2, title: 'Setup Database', project: 'Database Migration', priority: 'Medium', status: 'In Progress' },
    { id: 3, title: 'User Testing', project: 'Mobile App', priority: 'Low', status: 'Done' }
  ];
}