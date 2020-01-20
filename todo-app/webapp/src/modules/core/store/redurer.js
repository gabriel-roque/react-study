import * as types from "./types";

const INITIAL_STATE = {
  name: "for exemplo outher data in store global",
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
      state.tasks.forEach((task, i) => {
        if (task.desc === action.task.desc) state.tasks[i].complete = true;
      });
      return { ...state, tasks: [...state.tasks] };

    default:
      return state;
  }
};
