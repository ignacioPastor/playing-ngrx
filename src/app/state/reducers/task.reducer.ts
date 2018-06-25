import * as taskActions from './../actions/task.actions';

export function taskReducer(state = [], action: taskActions.Action) {
  switch (action.type) {
    case taskActions.LOAD_TASKS_SUCCESS:
      return action.payload;
    case taskActions.DELETE_TASKS_SUCCESS:
      return state.filter(task => task.id !== action.payload);
    default:
      return state;
  }
}
