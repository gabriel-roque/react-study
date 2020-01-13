import React, { Component } from "react";

import PagaHeader from "../template/PageHeader";

export default class Todo extends Component {
  render() {
    return (
      <div>
        <PagaHeader name="Tasks" small="Create" />
        My todos
      </div>
    );
  }
}
