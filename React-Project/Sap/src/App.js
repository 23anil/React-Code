import "./App.css";
import Home from "./components/Home";
import Appbar from "./components/Appbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Registration from "./components/Registration";
import Loginpage from "./components/Loginpage";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home"/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/registration" element={<Registration />} />
          <Route
            path="/*"
            element={
              <div>
                <h2>404</h2>
                <h1>Page Not found</h1>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
