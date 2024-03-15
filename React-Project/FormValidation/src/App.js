import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import UserForm from "./Components/UserForm";
import { useState } from "react";
import Display from "./Components/Display";


function App() {
  let getlocaldata = () => {
    let Ldata = localStorage.getItem("userdata");
    if (Ldata) {
      return JSON.parse(localStorage.getItem("userdata"));
    } else {
      return [];
    }
  };

  const [userdata, setuserdata] = useState(getlocaldata());

  let getuserdata = (data) => {
    let copy = [...userdata];
    copy.push(data);
    setuserdata(copy);
    localStorage.setItem("userdata", JSON.stringify(userdata));
  };
  console.log("userdata", userdata);
  return (
    <div className="App">
      <UserForm getuserdata={getuserdata} />
      <Display userdata={userdata} />
    </div>
  );
}

export default App;
