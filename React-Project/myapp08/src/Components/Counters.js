import React, { useReducer } from "react";

function Counters() {
  let initial = {
    counter1: 0,
    counter2: 0,
  };

  let reducer = (state, action) => {
    switch (action.type) {
      case "incre01":
        return { ...state, counter1: state.counter1 + action.payload };
      case "decre01":
        return { ...state, counter1: state.counter1 - action.payload };
      case "reset01":
        return { ...state, counter1: initial.counter1 };

      case "incre02":
        return { ...state, counter2: state.counter2 + action.payload };
      case "decre02":
        return { ...state, counter2: state.counter2 - action.payload };
      case "reset02":
        return { ...state, counter2: initial.counter2 };

      default:
        return state;
    }
  };

  const [data, dispatch] = useReducer(reducer, initial);
  return (
    <div>
      <h1>counter1:{data.counter1}</h1>
      <button
        onClick={() => {
          dispatch({ type: "incre01", payload: 10 });
        }}
      >
        increment01
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decre01", payload: 5 });
        }}
      >
        decrement01
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset01" });
        }}
      >
        reset01
      </button>
      <h1>counter2:{data.counter2}</h1>
      <button onClick={() => {
          dispatch({ type: "incre02", payload: 10 });
        }}>increment02</button>
      <button onClick={() => {
          dispatch({ type: "decre02", payload: 5 });
        }}>decrement02</button>
      <button onClick={() => {
          dispatch({ type: "reset02"});
        }}>reset02</button>
    </div>
  );
}

export default Counters;
