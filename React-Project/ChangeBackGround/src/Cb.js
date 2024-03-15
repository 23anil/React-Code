import React, { useEffect, useState } from "react";

function Cb() {
  const [colors] = useState(["red", "blue", "green", "orange"]);
  const [v, setv] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setv((value) => (value === colors.length - 1 ? 0 : value + 1));
    }, 2000);
  }, []);
  
  return (
    <div
      style={{
        backgroundColor: `${colors[v]}`,
        height: "100vh",
        width: "100vw",
      }}
    ></div>
  );
}

export default Cb;

// import * as React from 'react';

// export default function Cd() {
// const [colors] = React.useState(["red","green","blue"])

//   const [value, setValue] = React.useState(0);

//   React.useEffect(() => {
//     setInterval(() => {
//       setValue((v) => (v === colors.length-1 ? 0 : v + 1));
//     }, 1000);
//   }, []);
// let color01=colors[value];
// console.log(color01);
//   return (
//     <div style={{backgroundColor:{color01} ,height:"100vh",width:"100vw"}}></div>
//   );
// }
