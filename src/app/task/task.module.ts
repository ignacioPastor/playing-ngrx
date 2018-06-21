import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskManagerComponent } from './components/task-manager/task-manager.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [TaskListComponent, TaskManagerComponent],
  exports: [TaskManagerComponent]
})
export class TaskModule {}
