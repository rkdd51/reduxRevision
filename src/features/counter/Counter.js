import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import "./Counter.css";
import { useState } from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);
  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };
  return (
    <div className="parent">
      <div className="count">{count}</div>
      <div className="button">
        <button onClick={() => dispatch(increment())} className="firstButton">
          +
        </button>
        <button onClick={() => dispatch(decrement())} className="secondButton">
          -
        </button>
      </div>

      <input
        className="input"
        type="text"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />

      <div>
        <button
          onClick={() => dispatch(incrementByAmount(addValue))}
          className="thirdButton"
        >
          Add Amount
        </button>
        &nbsp;
        <button onClick={resetAll} className="fourthButton">
          ResetAll
        </button>
      </div>
    </div>
  );
};

export default Counter;
