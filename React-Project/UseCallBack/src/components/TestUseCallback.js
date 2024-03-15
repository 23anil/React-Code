import React, {  useCallback, useState } from "react";
import CountName from "./CountName";
import Count01 from "./Count01";

function TestUseCallback() {
  const [data, setdata] = useState([]);
  const [count, setcount] = useState(0);

  let update = useCallback(()=>{
setdata([...data,"Anil"])
  },[data])

  let Change = useCallback(()=> {
    setcount(count + 1);
  },[count]);

  return (
    <div>
      <CountName data={data} update={update} />
      {/* <Count01 count={count} /> */}
      <h1>{count}</h1>
      <button onClick={Change}>Change Count</button>
    </div>
  );
}

export default TestUseCallback;
