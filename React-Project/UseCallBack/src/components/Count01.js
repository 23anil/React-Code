import React, { memo } from 'react'

function Count01({count}) {
    console.log("Count01 Excuted");
  return (
    <div>
        <h1>Count01</h1>
        <h2>Count01 : {count}</h2>
    </div>
  )
}

export default memo( Count01)