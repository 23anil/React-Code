import React from "react";

function Throtlling() {
  let count = 1;
  let getdata = () => {
    console.log("Fetching Data", count++);
  };

  function throttl(fn, time) {
    let falg = true;
    return () => {
      if (falg) {
        fn();
        falg = false;
        setTimeout(() => {
          falg = true;
        }, time);
      }
    };
  }

  return (
    <div>
      <h1>Throttling In React</h1>
      <button onClick={throttl(getdata, 4000)}>Submit</button>
    </div>
  );
}

export default Throtlling;
