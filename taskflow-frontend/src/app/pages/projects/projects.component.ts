import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    { id: 1, name: 'Website Redesign', status: 'In Progress', progress: 60 },
    { id: 2, name: 'Mobile App Development', status: 'Planning', progress: 20 },
    { id: 3, name: 'Database Migration', status: 'Completed', progress: 100 }
  ];
}