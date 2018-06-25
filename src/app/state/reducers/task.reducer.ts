import * as taskActions from './../actions/task.actions';
import { Task } from './../../task/model/task';

export function taskReducer(state = [new Task({ name: 'Default 1' })], action: taskActions.Action) {
  switch (action.type) {
    case taskActions.LOAD_TASKS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
