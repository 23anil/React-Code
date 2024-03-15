import React, { useEffect, useState } from "react";

function Test() {
  const [data, setdata] = useState("");
  useEffect(() => {
    if(data==="Anil")
    {
        console.log("Function Excuted");
    }
    // console.log("get");
  }, [data]);

  return (
    <div>
      <h1>Test</h1>
      <button
        onClick={() => {
          setdata("Anil");
        }}
      >
        Update
      </button>
    </div>
  );
}

export default Test;
