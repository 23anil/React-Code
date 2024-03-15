import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Userform from "./Components/Userform";
import { useState } from "react";
import Displaydata from "./Components/Displaydata";

function App() {
  let getlocaldata = () => {
    let data = localStorage.getItem("userdata");
    if (data) {
      return JSON.parse(localStorage.getItem("userdata"));
    } else {
      return [];
    }
  };

  const [formdata, setformdata] = useState(getlocaldata());

  let getuserdata = (userdata) => {
    let formdatacopy = [...formdata];
    formdatacopy.push(userdata);
    setformdata(formdatacopy);
    localStorage.setItem("userdata", JSON.stringify(formdatacopy));
  };

  console.log("formdata", formdata);
  return (
    <div className="App">
      <Userform getuserdata={getuserdata} />
      <Displaydata formdata={formdata} />
    </div>
  );
}

export default App;
