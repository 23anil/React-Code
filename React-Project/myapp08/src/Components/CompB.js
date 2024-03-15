import React from "react";
import { useNavigate } from "react-router-dom";

function CompB() {
  let navigate = useNavigate();
  let gotocompc = () => {
    navigate("/compc");
  };
  return (
    <div>
      <h1>CompB</h1>
      <button onClick={gotocompc}>CompC</button>
    </div>
  );
}

export default CompB;
