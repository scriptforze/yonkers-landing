import React, { Component } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";
import { CounterButton, CounterContainer, CounterNumber } from "./styled";

interface CounterProps {
  onDataFromChild: (data: number) => void;
  stock: (data: number) => void;
}
const Counter: React.FC<CounterProps> = ({ onDataFromChild, stock }) => {

  const [count, setCount] = useState(1);
  onDataFromChild(count);

  const sendDataToParent = () => {
    onDataFromChild(count);
  }

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const incrementCount = () => {
    if (stock > count) {
      setCount(count + 1);
    }
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
