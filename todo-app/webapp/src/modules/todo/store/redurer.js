import * as types from "./types";

const INITIAL_STATE = {
  name: "for exemplo outher data in store global",
  tasks: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.TOOGLE_STATUS_TASK:
      state.tasks.forEach((task, i) => {
        if (
          task.description === action.task.description &&
          task.completed === false
        ) {
          state.tasks[i].completed = true;
        } else if (
          task.description === action.task.description &&
          task.completed === true
        ) {
          state.tasks[i].completed = false;
        }
      });
      return { ...state, tasks: [...state.tasks] };

    case types.INITIAL_TASKS:
      return { ...state, tasks: [...action.tasks] };

    case types.ADD_TASK:
      let tasks = [...state.tasks];
      tasks.push(action.task);
      return { ...state, tasks };

    case types.DELETE_TASK:
      state.tasks.forEach((task, i) => {
        if (task._id === action.task_id) {
          state.tasks.splice(i, 1);
        }
      });
      return { ...state, tasks: [...state.tasks] };

    default:
      return state;
  }
};
