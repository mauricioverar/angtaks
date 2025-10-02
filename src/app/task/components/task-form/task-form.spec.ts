import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskForm } from './task-form';
// import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('TaskForm', () => {
  let component: TaskForm;
  let fixture: ComponentFixture<TaskForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskForm],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the form component', () => {
    expect(component).toBeTruthy();
  });

  it('should render input fields', () => {
    const titleInput = fixture.nativeElement.querySelector(
      'input[formControlName="title"]'
    );
    const descriptionInput = fixture.nativeElement.querySelector(
      'textarea[formControlName="description"]'
    );
    const prioritySelect = fixture.nativeElement.querySelector(
      'select[formControlName="priority"]'
    );

    expect(titleInput).toBeTruthy();
    expect(descriptionInput).toBeTruthy();
    expect(prioritySelect).toBeTruthy();
  });

  it('should emit taskCreated with correct data on submit', () => {
    spyOn(component.taskCreated, 'emit');

    component.taskForm.setValue({
      title: 'Nueva tarea',
      description: 'Descripción',
      priority: 'alta',
    });

    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('submit', null);

    expect(component.taskCreated.emit).toHaveBeenCalledWith({
      id: jasmine.any(Number),
      title: 'Nueva tarea',
      description: 'Descripción',
      priority: 'alta',
      completed: false,
    });
  });

  it('should not emit if title is empty', () => {
    spyOn(component.taskCreated, 'emit');

    component.taskForm.setValue({
      title: '', // ❌ inválido
      description: 'Desc',
      priority: 'media',
    });

    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('submit', null);

    expect(component.taskCreated.emit).not.toHaveBeenCalled();
  });

});
