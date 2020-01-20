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

export const addTask = task => {
  return dispath => {
    apiTodo.post("/todos", task).then(resp => {
      dispath({ type: types.ADD_TASK, task: resp.data.todo });
    });
  };
};

export const completeTask = task => {
  return {
    type: types.COMPLETE_TASK,
    task
  };
};
