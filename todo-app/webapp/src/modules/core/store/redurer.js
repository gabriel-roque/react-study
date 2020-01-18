import * as types from "./types";

const INITIAL_STATE = {
  tasks: [
    {
      desc: "Using Redux",
      complete: false
    },
    {
      desc: "Refector a code",
      complete: false
    }
  ]
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.COMPLETE_TASK:
      state.tasks.map((task, i) => {
        if (task.desc === action.task.desc) {
          state.tasks[i].complete = true;
        }
      });
      return {
        tasks: [...state.tasks]
      };
    default:
      return state;
  }
};
