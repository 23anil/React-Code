import React from 'react'
import CompC from './CompC'

function CompB(props) {
  return (
    <div>
        <h1>comp B</h1>
        <CompC data={props.data}/>
        </div>
  )
}

export default CompB
