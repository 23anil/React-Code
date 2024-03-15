import React from 'react'
import { useNavigate } from 'react-router-dom'

function CompA() {
  let navigate=useNavigate();

  let gotocompb=()=>{
    navigate("/compb")
  }
  return (
    <div>
        <h1>CompA</h1>
        <button onClick={gotocompb}>CompB</button>
    </div>
  )
}

export default CompA