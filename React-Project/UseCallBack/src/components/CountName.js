import React, { memo } from "react";

function CountName({ data, update }) {
  console.log("Count Name Excuted");
  return (
    <div>
      <h1>CountName</h1>
      {data.map((val,idx) => (
        <h4 key={idx}>{val}</h4>
      ))}
      <button onClick={update}>Change Name</button>
    </div>
  );
}

export default memo( CountName);
