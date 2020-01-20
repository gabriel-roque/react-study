import React, { useState } from "react";

import { connect } from "react-redux";
import * as TodoActions from "modules/todo/store/actions";

function TodoForm({ addTask }) {
  const [task, setTask] = useState("");

  function submitForm(e) {
    e.preventDefault();
    let data = { description: task, completed: false };
    addTask(data);
  }

  return (
    <form onSubmit={submitForm}>
      <div className="row align-items-end">
        <div className="col-4">
          <div className="form-group">
            <label htmlFor="todo">Add your task</label>
            <input
              type="text"
              id="todo"
              className="form-control"
              onChange={e => setTask(e.target.value)}
            />
          </div>
        </div>

        <div className="col-2">
          <div className="form-group">
            <button className="btn btn-primary" type="submit">
              <i className="fas fa-plus-square"></i>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

const mapDispatchToProps = dispatch => ({
  addTask: task => dispatch(TodoActions.addTask(task))
});

export default connect(null, mapDispatchToProps)(TodoForm);
