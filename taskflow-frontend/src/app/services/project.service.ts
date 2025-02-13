import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private mockProjects: Project[] = [
    {
      id: 1,
      name: 'Progetto Alpha',
      description: 'Sviluppo nuovo sistema di gestione',
      taskCount: 12,
      completion: 75,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      name: 'Progetto Beta',
      description: 'Implementazione dashboard analytics',
      taskCount: 8,
      completion: 45,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 3,
      name: 'Progetto Gamma',
      description: 'Ottimizzazione performance',
      taskCount: 15,
      completion: 30,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ];

  getProjects(): Observable<Project[]> {
    return of(this.mockProjects);
  }

  getProject(id: number): Observable<Project | undefined> {
    return of(this.mockProjects.find(p => p.id === id));
  }

  createProject(project: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>): Observable<Project> {
    const newProject: Project = {
      ...project,
      id: this.mockProjects.length + 1,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.mockProjects.push(newProject);
    return of(newProject);
  }

  updateProject(id: number, project: Partial<Project>): Observable<Project> {
    const index = this.mockProjects.findIndex(p => p.id === id);
    if (index !== -1) {
      this.mockProjects[index] = {
        ...this.mockProjects[index],
        ...project,
        updatedAt: new Date()
      };
      return of(this.mockProjects[index]);
    }
    throw new Error('Project not found');
  }

  deleteProject(id: number): Observable<void> {
    const index = this.mockProjects.findIndex(p => p.id === id);
    if (index !== -1) {
      this.mockProjects.splice(index, 1);
    }
    return of(void 0);
  }
}