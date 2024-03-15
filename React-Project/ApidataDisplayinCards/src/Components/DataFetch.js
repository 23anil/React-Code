import React, { useEffect } from "react";

function DataFetch() {
  let fetchdatas = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/photos");
    let data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    fetchdatas();
  }, []);
  
  return (
    <div className="d-flex align-items-center justify-content-center position-absolute h-100 w-100 bg-warning-subtle">
      <div className="bg-secondary-subtle" style={{height:"90%",width:"90%"}}>Anil</div>
    </div>
  );
}

export default DataFetch;
