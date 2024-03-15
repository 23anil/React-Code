import React from 'react'
import { useRef } from 'react';

function FuncRef() {
    let myref=useRef();
    
    React.useEffect (() => {
      myref.current.focus();
    }, [])
    
  return (
    <div>
        Function Comp
        <input ref={myref}/>
    </div>
  )
}

export default FuncRef