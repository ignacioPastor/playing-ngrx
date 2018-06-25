import { Task } from './../../task/model/task';

export const LOAD_TASKS = 'LOAD_TASKS';
export const LOAD_TASKS_SUCCESS = 'LOAD_TASKS_SUCCESS';
export const DELETE_TASKS = 'DELETE_TASKS';
export const DELETE_TASKS_SUCCESS = 'DELETE_TASKS_SUCCESS';

export class LoadTaskAction {
  readonly type = LOAD_TASKS;
  constructor() {}
}

export class LoadTaskSuccessAction {
  readonly type = LOAD_TASKS_SUCCESS;
  constructor(public payload: Task[]) {}
}

export class DeleteTaskAction {
  readonly type = DELETE_TASKS;
  constructor(public payload: string) {}
}

export class DeleteTaskSuccessAction {
  readonly type = DELETE_TASKS_SUCCESS;
  constructor(public payload: string) {}
}

export type Action = LoadTaskAction | LoadTaskSuccessAction | DeleteTaskAction | DeleteTaskSuccessAction;
