import React from 'react'
import { useContext } from 'react'
import context from './context'

function CompC() {
  let data=useContext(context)
  console.log(data);
  return (
    <div>
      <h1>CompC</h1>
      <h1>{data.name}</h1>
      <h1>{data.age}</h1>
      
    </div>
  )
}

export default CompC