import React, { useReducer } from "react";

function Reducer() {
  let initial = 0;
  let reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return state + action.payload;
      case "decrement":
        return state - action.payload;
      case "reset":
        return initial;
      default:
        return state;
    }
  };

  const [data, dispatch] = useReducer(reducer,initial);
  return (
    <div>

        <h1>data:{data}</h1>
      <button
        onClick={() => {
          dispatch({ type: "increment", payload: 10 });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement", payload: 10 });
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
    </div>
  );
}

export default Reducer;
