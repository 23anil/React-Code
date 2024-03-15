import React, { useEffect, useState } from "react";

function FetchUser() {
  const [userdata, setuserdata] = useState([]);

  console.log("userdata", userdata);

  const [data, setdata] = useState("")

  let retrivedata = async () => {
    try {
      let respons = await fetch("https://jsonplaceholder.typicode.com/users");
      let data = await respons.json();
      // console.log("data",data);
      setuserdata(data);
    } catch (error) {
      // console.log("error", error);
    }
    // don't call the fetch api function like this
    // retrivedata();
  };

  useEffect(() => {
    retrivedata();
  }, [data]);

  return (
    <div>
      <h1>user names</h1>
      <button onClick={()=>{setdata("anil")}}>fetch</button>
      {userdata.map((val) => {
        return <li key={val.id}>{val.name}</li>;
      })}
    </div>
  );
}

export default FetchUser;
