import "./App.css";
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import ModelTest from "./components/ModelTest";
import FetchData from "./components/FetchData";

function App() {
  
  const [show, setshow] = useState(true)
  return (
    <div className="App">
      <button onClick={()=>{setshow(false)}}>click</button>

      {show &&    <ModelTest/> }
<FetchData/>
    </div>
  );
}

export default App;
