import "./App.css";
import LoginPage from "./components/LoginPage";
import "bootstrap/dist/css/bootstrap.min.css";
import Registerpage from "./components/Registerpage";
import SelectTheater from "./components/SelectTheater";

import Invoice from "./components/Invoice";
import SelectSeats from "./components/SelectSeats";
import MoviesList from "./components/MoviesList";
import PaymentStatus from "./components/PaymentStatus";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Registerpage />} />
          <Route path="/movies" element={<MoviesList />} />
          <Route path="/theater" element={<SelectTheater />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
