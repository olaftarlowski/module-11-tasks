import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

const Task2 = ({ start }) => {
  const [counter, setCounter] = useState(start);
  const [inputValue, setInputValue] = useState(0);

  const incrementHandler = () => {
    setCounter((prevState) => prevState + 1);
  };

  const decrementHandler = () => {
    setCounter((prevState) => prevState - 1);
  };

  const inputValueHandler = (e) => {
    setInputValue(e.target.value);
  };

  const changeValueHandler = () => {
    setCounter(Number(inputValue));
    setInputValue(0);
  };

  const resetHandler = () => {
    setCounter(0);
  };

  return (
    <div>
      <h2>Task2 counter</h2>
      <span data-testid="counter-element">{counter}</span>
      <div>
        <button onClick={incrementHandler} style={{margin: 4}}>+</button>
        <button onClick={decrementHandler} style={{margin: 4}}>-</button>
      </div>
      <div>
        <label htmlFor="changeValue">Change value</label>
        <input
          id="changeValue"
          type="number"
          value={inputValue}
          onChange={inputValueHandler}
        />
        <button onClick={changeValueHandler}>Change</button>
      </div>
      <div>
        <button onClick={resetHandler}>reset</button>
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
