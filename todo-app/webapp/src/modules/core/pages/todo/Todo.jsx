import React, { Component } from "react";

import PagaHeader from "../../../../components/PageHeader";

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
