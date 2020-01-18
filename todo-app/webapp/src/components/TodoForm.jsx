import React, { useState } from "react";

export default function TodoForm() {
  const [task, setTask] = useState("");

  function submitForm(e) {
    e.preventDefault();

    console.log(task);
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
