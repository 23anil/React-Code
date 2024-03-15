import React, { useContext } from 'react'
import Logincontext from '../context/Logincontext';

function CompD() {
    const contextLogin = useContext(Logincontext)
    console.log(contextLogin.getdataFromD);
   let somedata="hello parent";
  return (
    <div>
      <h1>compD</h1>
      {/* <h2>{contextLogin.AdminName}</h2>
      <h2>{contextLogin.password}</h2> */}

      <button onClick={()=>{contextLogin.getdataFromD(somedata)}}>send data to parent</button>
    </div>
  )
}

export default CompD