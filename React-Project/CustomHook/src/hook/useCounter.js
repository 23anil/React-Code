import { useState } from "react";

let useCounter=(initailvalue = 0,incre = 1,decre = 1)=> {
  const [count, setcount] = useState(initailvalue);

  let increment = () => {
    setcount(count + incre);
  };
  let decrement = () => {
    setcount(count - decre);
  };
  let reset = () => {
    setcount(initailvalue);
  };
  return [count, increment, decrement, reset];
}

export default useCounter;
