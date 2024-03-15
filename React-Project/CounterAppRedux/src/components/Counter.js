import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../Action/action";

function Counter() {
  let dispatch = useDispatch();
  console.log(dispatch);
  let dataFromstore = useSelector((state) => state);
  return (
    <div>
      <h3>Counter : {dataFromstore}</h3>
      <button
        onClick={() => {
          dispatch(increment(10));
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement(5));
        }}
      >
        decrement
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        reset
      </button>
    </div>
  );
}

export default Counter;
