import React, { useReducer } from "react";

let initailValue = 0;
  let depend = (prevState, action) => {
    switch (action) {
      case "INCREMENT":
        return prevState + 1;
      case "DECREMENT":
        return prevState - 1;
      case "RESET":
        return initailValue;
      default:
        return prevState;
    }
  };

function CounterOne() {
    const [state, dispatch] = useReducer(depend, initailValue) 
    console.log(state);
  return <div>
<h1>counter one : {state}</h1>
<button onClick={()=>{dispatch("INCREMENT")}}>+ Increment</button>
<br/>
<br/>
<button onClick={()=>{dispatch("DECREMENT")}}>- Decrement</button>
<br/>
<br/>
<button onClick={()=>{dispatch("RESET")}}> Reset</button>
  </div>;
}

export default CounterOne;
