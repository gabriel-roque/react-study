import React, { Component } from "react";

import PagaHeader from "components/PageHeader";
import TodoForm from "components/TodoForm";
import ListTasks from "components/ListTasks";

export default class Todo extends Component {
  render() {
    return (
      <div>
        <PagaHeader name="Tasks" small="Create" />
        <TodoForm />
        <ListTasks />
      </div>
    );
  }
}
