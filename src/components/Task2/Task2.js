import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

const Task2 = ({ start }) => {
  const [counter, setCounter] = useState(start);

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

Task2.propTypes = {
  start: PropTypes.number,
};

Task2.defaultProps = {
  start: 0,
};
