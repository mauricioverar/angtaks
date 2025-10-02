import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../../models/task.model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.scss',
})
export class TaskForm {
  title: string = '';
  description: string = '';
  priority: 'baja' | 'media' | 'alta' = 'media';

  @Output() taskCreated = new EventEmitter<Task>();

  taskForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      priority: ['media', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      const newTask: Task = {
        id: Date.now(),
        ...this.taskForm.value,
        completed: false,
      };

      this.taskCreated.emit(newTask);
      this.taskForm.reset({ priority: 'media' });
    }
  }
}
