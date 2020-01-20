import * as types from "./types";
import apiTodo from "services/apitodo";

export const initialTasks = () => {
  return (dispath, getState) => {
    apiTodo.get("/todos").then(resp => {
      dispath({ type: types.INITIAL_TASKS, tasks: resp.data.todos });
      // if case using current global state
      console.log(getState());
    });
  };
};

export const completeTask = task => {
  return {
    type: types.COMPLETE_TASK,
    task
  };
};
