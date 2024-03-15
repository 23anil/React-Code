import React from 'react'

function Person(props) {
  return (
    <div>
        <h1>I M A person</h1>
        {/*to generate an error*/}
        {props.data.slice()}
    </div>
  )
}

export default Person