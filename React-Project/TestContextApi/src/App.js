import "./App.css";
// import { useState } from "react";
import CompA from "./components/CompA";
import CompD from "./components/CompD";
import { Provider01 } from "./components/contect01";
// import CompD from './components/CompD';
// import { Provider01 } from './components/contect01';
import { Provider } from "./components/context";

function App() {
  // let data = "Hello";
  let person={
    name:"raju",
    age:23,
  }
   let recive=(data01)=>{
console.log(data01);
   } 
  return (
    <div className="App">
      <Provider value={person}>
        <CompA />
      </Provider>
      <Provider01 value={{recive}}>
        <CompD/>
      </Provider01>
    </div>
  );
}

export default App;
