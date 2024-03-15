import React from "react";
import { useState, useEffect } from "react";

function ModelTest() {
  const [name, setname] = useState(" ");

  useEffect(() => {
    console.log(" 1st useEffect on add dependency");
  }, [name]);

  useEffect(() => {
    console.log("2nd useEffect on empty dependency");
    return () => {
      console.log("2nd useEffect on unmount dependency");
    };
  }, []);

  return (
    <div>
      <h1>{name}</h1>
      <button
        onClick={() => {
          setname("Anil");
        }}
      >
        changename
      </button>
    </div>
  );
}

export default ModelTest;
