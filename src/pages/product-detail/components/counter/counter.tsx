import React, { Component } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="counter">
      <button className="counter-button" onClick={decrementCount}>
        <FaMinus />
      </button>
      <h1 className="counter-number">{count}</h1>

      <button className="counter-button" onClick={incrementCount}>
        <FaPlus />
      </button>
    </div>
  );
};

export default Counter;
