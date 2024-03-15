import "./App.css";

import UseEffect from "./components/UseEffect";
import UseEffectArray from "./components/UseEffectArray";
import FetchUser from "./components/FetchUser";
import { useState } from "react";
import FetchapiClass from "./components/FetchapiClass";
import Test from "./components/Test";

function App() {
  const [isshow, setisshow] = useState(true);

  return (
    <div className="App">
       <button onClick={()=>{setisshow(false)}}>un mount user effect</button>
      {isshow && 
      // <UseEffect />
      <Test/>
      } 
      {/* <UseEffectArray/> */}
      {/* <FetchUser/> */}
      {/* <FetchapiClass/> */}
    
    </div>
  );
}

export default App;
