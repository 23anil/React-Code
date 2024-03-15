import React, {  memo, useMemo } from "react";

function UseMemo({ inputnumber }) {

  let memosisedvalue = useMemo(() => inputnumber * 2, [inputnumber]);
  // let memosisedvalue01 = (inputnumber)*2;
  console.log("Child is excuted");
  return (
    <div>
      <h1>UseMemo</h1>
      <h2>Normal O/p :{inputnumber}</h2>
      <h2>usememo O/p :{memosisedvalue}</h2>
    </div>
  );
}

export default  memo(UseMemo);
