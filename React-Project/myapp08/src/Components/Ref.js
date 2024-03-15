import React, { useEffect, useRef } from "react";

function Ref() {
  let myref = useRef();

  useEffect(() => {
    myref.current.focus();
  }, []);
  return (
    <div>
      <input type="text" placeholder="Enter The Name" ref={myref} />
    </div>
  );
}

export default Ref;
