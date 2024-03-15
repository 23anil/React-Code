import React, { useReducer } from "react";

let initailValue = {
    countOne:0,
    countTwo:10
}
let depend = (prevState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...prevState,
        countOne: prevState.countOne + action.payload,
      };
    case "DECREMENT":
      return {
        ...prevState,
        countOne: prevState.countOne - action.payload,
      };
    case "RESET":
      return {
        ...prevState,
        countOne: initailValue.countOne,
      };

    case "INCREMENTTwo":
      return {
        ...prevState,
        countTwo: prevState.countTwo + action.payload,
      };
    case "DECREMENTtwo":
      return {
        ...prevState,
        countTwo: prevState.countTwo - action.payload,
      };
    case "RESETtwo":
      return {
        ...prevState,
        countTwo: initailValue.countTwo,
      };
    default:
      return prevState.countTwo;
  }
};

function Taskcount() {
  const [state, dispatch] = useReducer(depend, initailValue
  );

  return (
    <div>
      <h1>counter one : {state.countOne}</h1>
      <button
        onClick={() => {
          dispatch({type:"INCREMENT", payload:10});
        }}
      >
        + Increment
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          dispatch({type:"DECREMENT", payload:5});
        }}
      >
        - Decrement
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          dispatch({type:"RESET"});
        }}
      >
        {" "}
        Reset
      </button>
      <br />
      <br />
      <h1>counter two : {state.countTwo}</h1>
      <button
        onClick={() => {
          dispatch({type:"INCREMENTTwo", payload:20});
        }}
      >
        + Increment
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          dispatch({type:"DECREMENTtwo", payload:10});
        }}
      >
        - Decrement
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          dispatch({type:"RESETtwo"});
        }}
      >
        {" "}
        Reset
      </button>
    </div>
  );
}

export default Taskcount;
