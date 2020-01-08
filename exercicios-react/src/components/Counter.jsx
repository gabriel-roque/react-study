import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    number: this.props.number
  };

  addNumber = () => this.setState({ number: this.state.number + 1 });

  removeNumber = () => this.setState({ number: this.state.number - 1 });

  plusNumber = difference => {
    this.setState({ number: this.state.number + difference });
  };

  render() {
    return (
      <div>
        <hr />
        <div>Number: {this.state.number}</div>
        <button onClick={this.addNumber}>ISC + </button>
        <button onClick={this.removeNumber}>DEC - </button>
        <button onClick={() => this.plusNumber(10)}>PLUS </button>
        <hr />
      </div>
    );
  }
}

// Soluction Very Verbose
// constructor(props) {
//   super(props);
//   this.addNumber = this.addNumber.bind(this);
// }

// Soluction not variable this with arrow function
// <button onClick={() => this.addNumber()}>ISC +</button>

// Soluction not variable this with arrow function
// addNumber = () => {
//   console.log(this);
// };
