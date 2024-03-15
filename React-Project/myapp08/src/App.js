import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import CompA from "./Components/CompA";
import CompB from "./Components/CompB";
import CompC from "./Components/CompC";
import Reducer from "./Components/Reducer";
import Counters from "./Components/Counters";
import FetchReducer from "./Components/FetchReducer";
import { useState } from "react";
// import RefClass from './Components/classRef';
// import Ref from './Components/Ref';

function App() {
 
  return (
    <div className="App">
      {/* <Ref/> */}
      {/* <RefClass/> */}
   
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={"/compa"}/>}/>
          <Route path="/compa" element={<CompA/>}/>
          <Route path="/compb" element={<CompB/>}/>
          <Route path="/compc" element={<CompC/>}/>
          </Routes>
      </BrowserRouter> */}
      {/* <Reducer/> */}
      {/* <Counters/> */}
   <FetchReducer/>
    </div>
  );
}

export default App;
