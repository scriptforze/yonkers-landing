import React, { Component } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 1 };
    this.decrementCount = this.decrementCount.bind(this);
    this.incrementCount = this.incrementCount.bind(this);
  }

  decrementCount() {
    this.setState({ count: this.state.count - 1 });
  }

  incrementCount() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div className="counter">
        <button className="counter-button" onClick={this.decrementCount}>
          <FaMinus />
        </button>
        <h1 className="counter-number">{this.state.count}</h1>

        <button className="counter-button" onClick={this.incrementCount}>
          <FaPlus />
        </button>
      </div>
    );
  }
}

export default Counter;
