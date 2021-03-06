import { Injectable } from '@angular/core';
import { TaskService } from './../../services/task.service';
import { Effect, Actions } from '@ngrx/effects';
import * as taskActions from './../actions/task.actions';
import { switchMap, map, tap } from 'rxjs/operators';
import { Task } from './../../model/task';

/**
 * Here we would manage the comunication with the database.
 * If everything goes well, send action success
 */
@Injectable()
export class TaskEffects {
  constructor(private taskService: TaskService, private actions$: Actions) {}

  @Effect()
  loadTasks$ = this.actions$.ofType(taskActions.LOAD_TASKS).pipe(
    switchMap(() => this.taskService.getTasks()),
    map(tasks => new taskActions.LoadTaskSuccessAction(tasks))
  );

  @Effect()
  deleteTask$ = this.actions$.ofType(taskActions.DELETE_TASKS).pipe(
    switchMap((action: any) => this.taskService.deleteTask(action.payload)),
    map(taskId => new taskActions.DeleteTaskSuccessAction(taskId))
  );

  @Effect()
  addNewTask$ = this.actions$.ofType(taskActions.ADD_NEW_TASK).pipe(
    switchMap((action: any) => this.taskService.addNewTask(action.payload)),
    map((tasks: Task) => new taskActions.AddNewTaskSuccessAction(tasks))
  );
}
