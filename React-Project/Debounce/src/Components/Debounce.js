import React from "react";

function Debounce() {
  let fetchdata = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resolve) => resolve.json())
      .then((data) => console.log(data));
  };

  function debounce(time) {
    let timer;
   
    return () => {
      clearTimeout(timer)
      // console.log("Excuted");
      // console.log("Timer",timer);
      timer = setTimeout(() => {
        fetchdata();
      }, time);
     
      
    };
  }

  return (
    <div>
      <h1>Debounce In React</h1>
      <input type="text" placeholder="Enter Text" onKeyUp={debounce(3000)} />
    </div>
  );
}

export default Debounce;
