import React, { Component } from "react";

export default class ComponentByClass extends Component {
  render() {
    return (
      <div>
        <h1>Component By Class</h1>
        <span>Value: {this.props.value || "Null value"}</span>
      </div>
    );
  }
}
