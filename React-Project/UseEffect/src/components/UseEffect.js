import React, { useEffect, useState } from "react";

function UseEffect() {
  let [name, setname] = useState("");
  let [age, setage] = useState();

  // the bellow useEffect will get excuted whenever name is updated with diffrent value
  //(note: if name is updated to same value again and again the bellow useEffect will not
  //get excuted and also re-render will not happen i.e, return statement will not excute
  //but in case of class component it will excute)

  useEffect(() => {
    if (name) {
      console.log("name dependency changed, first useEffect excuted");
    }
  }, [name]);

  useEffect(() => {
    console.log("second useEffect excuted");
    // the below function will get excuted before unmounting
    // the component from real dom
    // the below function is equivalent to component will un mount of class component
    return () => {
      console.log("my component got unmounted");
    };
  });
  return (
    <div>
      <h1>Hello EveryOne</h1>
      <h1>My name is:{name}</h1>
      <h1>My age is:{age}</h1>
      <button
        onClick={() => {
          setname("anil");
        }}
      >
        Change Name
      </button>
      <button
        onClick={() => {
          setage(23);
        }}
      >
        Change Age
      </button>
    </div>
  );
}

export default UseEffect;
