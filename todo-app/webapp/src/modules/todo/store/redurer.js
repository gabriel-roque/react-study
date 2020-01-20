import * as types from "./types";

const INITIAL_STATE = {
  name: "for exemplo outher data in store global",
  tasks: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.COMPLETE_TASK:
      state.tasks.forEach((task, i) => {
        if (task.description === action.task.description) {
          state.tasks[i].completed = true;
        }
      });
      return { ...state, tasks: [...state.tasks] };

    case types.INITIAL_TASKS:
      return { ...state, tasks: [...action.tasks] };

    case types.ADD_TASK:
      let tasks = [...state.tasks];
      tasks.push(action.task);
      return { ...state, tasks };

    default:
      return state;
  }
};
