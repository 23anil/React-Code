import React from 'react'

function FuncComp({uname}) {
    console.log("Function Component :",uname);
  return (
    <div>
        <h1>Name in Func comp : {uname}</h1>
    </div>
  )
}
// export default FuncComp
// wrap the component with React.memo to make it pure component
export default React.memo(FuncComp)