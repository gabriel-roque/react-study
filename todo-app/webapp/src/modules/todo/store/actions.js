import * as types from "./types";
import apiTodo from "services/apitodo";

export const initialTasks = () => {
  return (dispath, getState) => {
    apiTodo.get("/todos").then(resp => {
      dispath({ type: types.INITIAL_TASKS, tasks: resp.data.todos });
      // if case using current global state
      // console.log(getState());
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

export const toggleStatusTask = task => {
  return dispath => {
    const data = { id: task._id, completed: !task.completed };
    apiTodo.put(`/todos/${task._id}`, data).then(resp => {
      dispath({ type: types.TOOGLE_STATUS_TASK, task: resp.data.todo });
    });
  };
};

export const deleteTask = task => {
  return dispath => {
    // console.log(task);
    apiTodo.delete(`/todos/${task._id}`).then(resp => {
      dispath({ type: types.DELETE_TASK, task_id: task._id });
    });
  };
};
