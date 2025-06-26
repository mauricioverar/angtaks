import { Component } from '@angular/core';
import { Task } from '../../models/task.model';
import { CommonModule } from '@angular/common';
import { TaskForm } from '../../components/task-form/task-form';
import { TaskList } from '../../components/task-list/task-list';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TaskForm, TaskList],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {
  tasks: Task[] = [];

  onTaskCreated(task: Task): void {
    this.tasks.push(task);
  }

  onTaskToggled(id: number): void {
    const task = this.tasks.find((t) => t.id === id);
    if (task) task.completed = !task.completed;
  }

  onTaskDeleted(id: number): void {
    this.tasks = this.tasks.filter((t) => t.id !== id);
  }
}

