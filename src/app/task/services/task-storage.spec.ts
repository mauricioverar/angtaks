import { TestBed } from '@angular/core/testing';

import { TaskStorage } from './task-storage';
import { Task } from '../models/task.model';

describe('TaskStorage', () => {
  let service: TaskStorage;
  const mockTask: Task = {
    id: 1,
    title: 'Test Task',
    description: 'Desc',
    priority: 'alta',
    completed: false,
  };


  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskStorage);
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should save and load tasks from localStorage', () => {
    service.save([mockTask]);
    const loadedTasks = service.load();
    expect(loadedTasks.length).toBe(1);
    expect(loadedTasks[0].title).toBe('Test Task');
  });

  it('should return empty array if nothing is stored', () => {
    const loadedTasks = service.load();
    expect(loadedTasks).toEqual([]);
  });

});
