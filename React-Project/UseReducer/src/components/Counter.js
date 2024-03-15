import React from "react";

function Counter() {
  let initail = {
    count01: 0,
    count02: 10,
  };
  let reducer = (preState, action) => {
    switch (action.type) {
      case "increment":
        return { ...preState, count01: preState.count01 + action.payload };
      case "decrement":
        return {
          ...preState,
          count01: preState.count01 - action.payload,
        };
      case "reset":
        return { ...preState, count01: initail.count01 };
        case "increment01":
          return { ...preState, count02: preState.count02 + action.payload };
        case "decrement01":
          return {
            ...preState,
            count02: preState.count02 - action.payload,
          };
        case "reset01":
          return { ...preState, count02: initail.count02};
      default:
        return { ...preState, count01: preState.count01 };
    }
  };
  const [state, dispatch] = React.useReducer(reducer, initail);
  return (
    <div>
      <h1>Count 01 : {state.count01}</h1>
      <button
        onClick={() => {
          dispatch({ type: "increment", payload: 10 });
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement", payload: 5 });
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        Reset
      </button>
      <h1>Count 02 : {state.count02}</h1>
      <button
        onMouseOver={() => {
          dispatch({ type: "increment01", payload: 10 });
        }}
      >
       Hover incr
      </button>
      <button
        onMouseOver={() => {
          dispatch({ type: "decrement01", payload: 5 });
        }}
      >
        Hover Decr
      </button>
      <button
        onMouseOver={() => {
          dispatch({ type: "reset01" });
        }}
      >
       Hover Reset
      </button>
    </div>
  );
}

export default Counter;
