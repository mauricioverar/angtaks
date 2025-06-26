import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

const STORAGE_KEY = 'tasks';


@Injectable({
  providedIn: 'root',
})
export class TaskStorage {
  load(): Task[] {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }

  save(tasks: Task[]): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }
}
