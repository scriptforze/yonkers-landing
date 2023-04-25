import React, { Component } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";
import { CounterButton, CounterContainer, CounterNumber } from "./styled";

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
    <CounterContainer>
      <CounterButton onClick={decrementCount}>
        <FaMinus />
      </CounterButton>
      <CounterNumber>{count}</CounterNumber>

      <CounterButton onClick={incrementCount}>
        <FaPlus />
      </CounterButton>
    </CounterContainer>
  );
};

export default Counter;
