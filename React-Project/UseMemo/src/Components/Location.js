import React from "react";
import { useLocation } from "react-router-dom";

function Location() {
  let data = useLocation();
  console.log(data);
  return (
    <div>
      <h1>{Location}</h1>
    </div>
  );
}

export default Location;
