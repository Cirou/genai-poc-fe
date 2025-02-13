export interface Project {
  id: number;
  name: string;
  description: string;
  taskCount: number;
  completion: number;
  createdAt: Date;
  updatedAt: Date;
}