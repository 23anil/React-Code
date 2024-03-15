import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,reset } from './createSlice';
function Counter() {
let dispatch=useDispatch();
let data=useSelector((state)=>(state.Counter))
console.log(data);
  return (
    <div>
<h1>Counter :{data}</h1>
<button onClick={()=>{dispatch(increment())}}>Increment</button>
<button onClick={()=>{dispatch(decrement())}}>Decrement</button>
<button onClick={()=>{dispatch(reset())}}>Reset</button>
    </div>
  )
}

export default Counter