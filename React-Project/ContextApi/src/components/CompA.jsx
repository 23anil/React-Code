import React from 'react'
import CompB from './CompB'

function CompA(props) {
  return (
    <div>
        <h1>comp A</h1>
        <CompB data={props.data}/>
    </div>
  )
}

export default CompA