import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskForm } from './components/task-form/task-form';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home';



@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TaskForm,
  ],
  exports: [HomeComponent],
})
export class TaskModule {}
