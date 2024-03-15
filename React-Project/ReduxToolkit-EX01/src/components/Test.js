import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './counterSlice';

function Test() {
    let count =useSelector((state)=>state.counter.count)
    let dispatch=useDispatch();
    console.log(count);
  return (
    <div>
        <p>{count}</p>
        <button onClick={()=>{dispatch(increment())}}>+</button>
        <button onClick={()=>{dispatch(decrement())}}>-</button>
    </div>
  )
}

export default Test