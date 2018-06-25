import { Injectable } from '@angular/core';
import { TaskService } from './../../task/services/task.service';
import { Effect, Actions } from '@ngrx/effects';
import * as taskActions from './../actions/task.actions';
import { switchMap, map, tap } from 'rxjs/operators';

@Injectable()
export class TaskEffects {
  constructor(private taskService: TaskService, private actions$: Actions) {}

  @Effect()
  loadTasks$ = this.actions$.ofType(taskActions.LOAD_TASKS).pipe(
    switchMap(() => this.taskService.getTasks()),
    map(tasks => new taskActions.LoadTaskSuccessAction(tasks))
  );
}
