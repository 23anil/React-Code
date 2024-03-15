import "./App.css";
import Registerpage from "./Components/Registerpage";
import Locations from "./Components/Locations";
import Payment from "./Components/Payment";
import PamentStatus from "./Components/PamentStatus";
import PaymentPolicy from "./Components/PaymentPolicy";
import MyBookings from "./Components/MyBookings";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom/dist/umd/react-router-dom.development";
import Loginpage from "./Components/Loginpage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/loginpage" />} />
          <Route path="/loginpage" element={<Loginpage />} />
          <Route path="/registerpage" element={<Registerpage />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/myBookings" element={<MyBookings />} />
          <Route path="/paypolicy" element={<PaymentPolicy />} />
        </Routes>
      </BrowserRouter>
      {/* <Locations /> */}
    </div>
  );
}

export default App;
