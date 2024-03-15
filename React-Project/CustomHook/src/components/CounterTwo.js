import React from 'react'
import useCounter from '../hook/useCounter'

function CounterTwo() {
  // const [count, increment, decrement, reset]=useCounter(20,10,5)
  const [count, increment, decrement, reset]=useCounter(20,10,5)
  // const [count, setcount] = useState(0)
  // let increment=()=>{
  //   setcount(count+1);
  // }
  // let decrement=()=>{
  //   setcount(count-1);
  // }
  // let reset=()=>{
  //   setcount(0);
  // }

  return (
    <div>
      <h1>Counter 2 : {count}</h1>
      <button onClick={increment}>INCREMENT</button>
      <br/>
      <br/>
      <button onClick={decrement}>DECREMENT</button>
      <br/>
      <br/>
      <button onClick={reset}>RESET</button>
    </div>
  )
}

export default CounterTwo