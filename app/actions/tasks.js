export const ADD_TASK = 'ADD_TASK';
export const START_TASK = 'START_TASK';
export const END_TASK = 'END_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export function addTask(parentIndexPath, taskObject) {
  return {
    type: ADD_TASK,
    parentIndexPath,
    taskObject
  };
}

export function startTask() {
  return {
    type: START_TASK
  };
}

export function endTask() {
  return {
    type: END_TASK
  };
}

export function updateTask(indexPath, params) {
  return {
    type: UPDATE_TASK,
    indexPath,
    params
  };
}

export function deleteTask(indexPath) {
  return {
    type: DELETE_TASK,
    indexPath
  };
}
