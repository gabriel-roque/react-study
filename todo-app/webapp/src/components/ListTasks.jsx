import React from "react";

import { connect } from "react-redux";
import { completeTask } from "../modules/core/store/actions";

function ListTasks({ tasks, dispatch }) {
  return (
    <div>
      <ul>
        {tasks.map((task, i) => (
          <li key={i} style={{ listStyleType: "none" }}>
            {task.complete ? (
              <i className="fa fa-check mr-2" />
            ) : (
              <i className="fa fa-times mr-2" />
            )}
            {task.desc}
            <button onClick={() => dispatch(completeTask(task))}>
              Complete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default connect(state => ({ tasks: state.tasks }))(ListTasks);
