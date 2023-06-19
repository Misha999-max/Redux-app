import * as actions from "./actionTypes";

export function taskComleted(id) {
  return {
    type: actions.taskUpdates,
    payload: { id, completed: true },
  };
}

export function titleChange(id) {
  return {
    type: actions.taskUpdates,
    payload: { id, title: `new title for ${id}` },
  };
}
export function taskDeleted(id) {
  return {
    type: actions.taskDeleted,
    payload: { id: id },
  };
}
