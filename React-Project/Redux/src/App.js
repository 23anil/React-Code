import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Create from "./components/Create";

function App() {
  return (
    <div className="App">
      <Create/>
      <Home />
    </div>
  );
}

export default App;
