import { legacy_createStore as createStore } from "redux";
import { taskReducer } from "./taskReducer";

const initialState = [
  { id: 0, title: "task 1", completed: false },
  { id: 1, title: "task 2", completed: false },
  { id: 2, title: "task 3", completed: false },
];

export function initietStore() {
  return createStore(taskReducer, initialState);
}
