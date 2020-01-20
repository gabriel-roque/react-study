import React, { useEffect } from "react";

import { connect } from "react-redux";
import * as TodoActions from "modules/todo/store/actions";

function ListTasks({ tasks, completeTask, initialTasks }) {
  useEffect(() => {
    initialTasks();
  }, [initialTasks]);

  return (
    <div>
      <ul>
        {tasks.map((task, i) => (
          <li key={i} style={{ listStyleType: "none" }}>
            {task.completed ? (
              <i className="fa fa-check mr-2" />
            ) : (
              <i className="fa fa-times mr-2" />
            )}
            {task.description}
            <button onClick={() => completeTask(task)}>Complete</button>
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
  completeTask: task => dispatch(TodoActions.completeTask(task)),
  initialTasks: () => dispatch(TodoActions.initialTasks())
});

export default connect(mapStateToProps, mapDispatchToProps)(ListTasks);
