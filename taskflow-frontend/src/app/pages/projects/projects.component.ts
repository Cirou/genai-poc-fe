import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true,
  imports: [RouterLink]
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.projectService.getProjects().subscribe(
      projects => this.projects = projects
    );
  }

  deleteProject(id: number): void {
    if (confirm('Sei sicuro di voler eliminare questo progetto?')) {
      this.projectService.deleteProject(id).subscribe(() => {
        this.loadProjects();
      });
    }
  }
}