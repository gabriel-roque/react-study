import React, { Component } from "react";

export default class ComponentByClass extends Component {
  render() {
    return (
      <div>
        <h3>Component By Class</h3>
        <span>Value: {this.props.value || "Null value"}</span>
      </div>
    );
  }
}
