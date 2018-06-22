import { Task } from './../../task/model/task';

export const LOAD_TASKS = 'LOAD_TASKS';
export const LOAD_TASKS_SUCCESS = 'LOAD_TASKS_SUCCESS';

export class LoadTaskAction {
  readonly type = LOAD_TASKS;

  constructor() {}
}

export class LoadTaskSuccessAction {
  readonly type = LOAD_TASKS_SUCCESS;

  constructor(public payload: Task[]) {}
}

export type Action = LoadTaskAction | LoadTaskSuccessAction;
