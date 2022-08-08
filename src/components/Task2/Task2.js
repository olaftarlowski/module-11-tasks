import React from "react";
import { useState } from "react";

const Task2 = () => {
  const [counter, setCounter] = useState(0);

  const incrementHandler = () => {
    setCounter((prevState) => prevState + 1);
  };

  const decrementHandler = () => {
    setCounter((prevState) => prevState - 1);
  };

  return (
    <div>
      <h2>Task2 counter</h2>
      <span data-testid="counter-element">{counter}</span>
      <div>
        <button onClick={incrementHandler}>+</button>
        <button onClick={decrementHandler}>-</button>
        <button>reset</button>
      </div>
    </div>
  );
};

export default Task2;
