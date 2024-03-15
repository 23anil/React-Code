import {  useState } from "react";
import UseMemo from "./Components/UseMemo";

function App() {
  const [inputnumber, setinputnumber] = useState(0);
  const [counter, setcounter] = useState(0);
  
  console.log("parent is excuted");
  return (
    <div className="App">
      <input
        type="number"
        placeholder="Enter a Number"
        onChange={(e) => {
          setinputnumber(e.target.value);
        }}
      />

      <UseMemo inputnumber={inputnumber} />
      <h1>counter : {counter}</h1>
      <button
        onClick={() => {
          setcounter(counter + 1);
        }}
      >
        increment
      </button>
    </div>
  );
}



export default App;
