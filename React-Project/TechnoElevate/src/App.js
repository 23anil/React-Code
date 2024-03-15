import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Appbar from "./Components.js/Appbar";
import { useState } from "react";
import AddQuestion from "./Components.js/AddQuestion";
import QuestionSection from "./Components.js/QuestionSection";
import Successfully from "./Components.js/Successfully";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
  const [copydata, setcopydata] = useState([]);
  let getdata = (recive) => {
    setcopydata(recive);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Appbar getdata={getdata} />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<AddQuestion />} />
          <Route
            path="/Questions"
            element={<QuestionSection copydata={copydata} />}
          />
           <Route
            path="/updated"
            element={<Successfully />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
