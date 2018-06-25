import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskManagerComponent } from './components/task-manager/task-manager.component';

import { StoreModule } from '@ngrx/store';
import { taskReducer } from './state/reducers/task.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TaskEffects } from './state/effects/task.effects';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forRoot({ tasks: taskReducer }),
    EffectsModule.forRoot([TaskEffects]),
    StoreDevtoolsModule.instrument()
  ],
  declarations: [TaskListComponent, TaskManagerComponent],
  exports: [TaskManagerComponent]
})
export class TaskModule {}
