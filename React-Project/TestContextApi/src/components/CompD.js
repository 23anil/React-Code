import React from 'react'
import { useContext } from 'react'
import context01 from './contect01'

function CompD() {
  let recive01=useContext(context01)
  console.log(recive01.recive);
  let some="car"
  return (
    <div>

<button onClick={()=>{recive01.recive(some)}}>click</button>
    </div>
  )
}

export default CompD