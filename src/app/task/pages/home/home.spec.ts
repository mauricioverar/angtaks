import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home';
import { TaskForm } from '../../components/task-form/task-form';
import { TaskList } from '../../components/task-list/task-list';
import { By } from '@angular/platform-browser';
import { Task } from '../../models/task.model';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render TaskForm and TaskList', () => {
    component.tasks = [
      {
        id: 1,
        title: 'Test',
        description: '',
        priority: 'media',
        completed: false,
      },
    ];
    fixture.detectChanges();

    const form = fixture.debugElement.query(By.css('app-task-form'));
    const list = fixture.debugElement.query(By.css('app-task-list'));

    expect(form).withContext('TaskForm not found in DOM').toBeTruthy();
    expect(list).withContext('TaskList not found in DOM').toBeTruthy();
  });

  it('should add a task when onTaskCreated is called', () => {
    const task: Task = {
      id: 1,
      title: 'Nueva tarea',
      description: 'Desc',
      priority: 'alta',
      completed: false,
    };
    component.onTaskCreated(task);
    expect(component.tasks.length).toBe(1);
    expect(component.tasks[0].title).toBe('Nueva tarea');
  });

  it('should toggle task completion', () => {
    component.tasks = [
      {
        id: 1,
        title: 'Tarea',
        description: '',
        priority: 'media',
        completed: false,
      },
    ];
    component.onTaskToggled(1);
    expect(component.tasks[0].completed).toBeTrue();
  });

  it('should delete a task by id', () => {
    component.tasks = [
      {
        id: 1,
        title: 'Tarea',
        description: '',
        priority: 'media',
        completed: false,
      },
    ];
    component.onTaskDeleted(1);
    expect(component.tasks.length).toBe(0);
  });

});
