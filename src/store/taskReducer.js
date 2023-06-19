import { taskUpdates, taskDeleted } from "./actionTypes";

export function taskReducer(state = [], action) {
  switch (action.type) {
    case taskUpdates: {
      const newArrary = [...state];
      const elementIndex = newArrary.findIndex(
        (el) => el.id === action.payload.id
      );
      newArrary[elementIndex] = {
        ...newArrary[elementIndex],
        ...action.payload,
      };
      return newArrary;
    }
    case taskDeleted: {
      const newArrary = [...state];
      return newArrary.filter((el) => el.id !== action.payload.id);
    }

    default:
      return state;
  }
}
