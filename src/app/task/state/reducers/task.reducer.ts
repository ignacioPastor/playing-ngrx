import * as taskActions from './../actions/task.actions';

/**
 * Here we handle the actions result of the effects.
 * Right now just success cases, but it could handle actions in case of errors.
 */
export function taskReducer(state = [], action: taskActions.Action) {
  switch (action.type) {
    case taskActions.LOAD_TASKS_SUCCESS:
      return action.payload;
    case taskActions.DELETE_TASKS_SUCCESS:
      return state.filter(task => task.id !== action.payload);
    case taskActions.ADD_NEW_TASK_SUCCESS:
      return [...state, action.payload];
    default:
      return state;
  }
}
