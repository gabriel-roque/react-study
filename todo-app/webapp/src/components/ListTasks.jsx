import React, { useEffect } from "react";

import { connect } from "react-redux";
import * as TodoActions from "modules/todo/store/actions";

function ListTasks({ tasks, toggleStatusTask, initialTasks, deleteTask }) {
  useEffect(() => {
    initialTasks();
  }, [initialTasks]);

  return (
    <div>
      <ul className="list-group">
        {tasks.map((task, i) => (
          <li
            className="list-group-item"
            key={i}
            style={{ listStyleType: "none" }}
          >
            {task.completed ? (
              <i className="fa fa-check mr-2 text-success" />
            ) : (
              <i className="fa fa-times mr-2 text-danger" />
            )}
            {task.description}
            {task.completed ? (
              <button
                className="ml-2 btn btn-warning btn-sm"
                onClick={() => toggleStatusTask(task)}
              >
                uncheck
              </button>
            ) : (
              <button
                className="ml-2 btn btn-success btn-sm"
                onClick={() => toggleStatusTask(task)}
              >
                check
              </button>
            )}
            <button
              className="ml-2 btn btn-danger btn-sm"
              onClick={() => deleteTask(task)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = state => ({
  tasks: state.todo.tasks
});

const mapDispatchToProps = dispatch => ({
  toggleStatusTask: task => dispatch(TodoActions.toggleStatusTask(task)),
  initialTasks: () => dispatch(TodoActions.initialTasks()),
  deleteTask: task => dispatch(TodoActions.deleteTask(task))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListTasks);
