import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskList } from './task-list';
import { Task } from '../../models/task.model';

describe('TaskList', () => {
  let component: TaskList;
  let fixture: ComponentFixture<TaskList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display task title', () => {
    component.tasks = [
      {
        id: 1,
        title: 'Tarea 1',
        description: 'Desc',
        priority: 'media',
        completed: false,
      },
    ];
    fixture.detectChanges();

    const title = fixture.nativeElement.querySelector('.task-title');
    expect(title).toBeTruthy();
    expect(title.textContent).toContain('Tarea 1');
  });

  it('should toggle description on title click', () => {
    const task: Task = {
      id: 1,
      title: 'Tarea 1',
      description: 'Desc',
      priority: 'media',
      completed: false,
    };
    component.tasks = [task];
    fixture.detectChanges();

    const title = fixture.nativeElement.querySelector('.task-title');
    title.click();
    fixture.detectChanges();

    const description =
      fixture.nativeElement.querySelector('.task-description');
    expect(description).toBeTruthy();
    expect(description.textContent).toContain('Desc');
  });

  it('should emit taskToggled when checkbox changes', () => {
    spyOn(component.taskToggled, 'emit');
    component.tasks = [
      {
        id: 1,
        title: 'Tarea 1',
        description: '',
        priority: 'media',
        completed: false,
      },
    ];
    fixture.detectChanges();

    const checkbox = fixture.nativeElement.querySelector(
      'input[type="checkbox"]'
    );
    expect(checkbox).toBeTruthy();

    checkbox.dispatchEvent(new Event('change'));
    expect(component.taskToggled.emit).toHaveBeenCalledWith(1);
  });

  it('should emit taskDeleted when delete button is clicked', () => {
    spyOn(component.taskDeleted, 'emit');
    component.tasks = [
      {
        id: 1,
        title: 'Tarea 1',
        description: '',
        priority: 'media',
        completed: false,
      },
    ];
    fixture.detectChanges();

    const deleteButton = fixture.nativeElement.querySelector('.delete-button');
    expect(deleteButton).toBeTruthy();

    deleteButton.click();
    expect(component.taskDeleted.emit).toHaveBeenCalledWith(1);
  });

  it('should apply correct class for alta priority', () => {
    component.tasks = [
      {
        id: 1,
        title: 'Urgente',
        description: '',
        priority: 'alta',
        completed: false,
      },
    ];
    fixture.detectChanges();
    const taskEl = fixture.nativeElement.querySelector('.task-item');
    expect(taskEl).toBeTruthy();
    expect(taskEl.classList).toContain('priority-alta');
  });

});
