import React, { useEffect, useRef } from "react";

function FunctionRef() {
  let myref = useRef();
  useEffect(() => {
    myref.current.focus();
  }, []);
  return <div>
    <input ref={myref}/>
  </div>;
}

export default FunctionRef;
