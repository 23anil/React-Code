import React from 'react'
import { useNavigate } from 'react-router-dom'

function CompC() {
  let navigate=useNavigate();
  let gotocompa=()=>{
    navigate("/compa")
  }
  return (
    <div>
        <h1>CompC</h1>
        <button onClick={gotocompa}>CompA</button>
    </div>
  )
}

export default CompC