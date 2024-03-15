import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./Comoponents/Products";
import { Suspense } from "react";
function App() {
  
  return (
    <div className="App">
      <Suspense fallback={<Loading/>}>
        <Products />
      </Suspense>
    </div>
  );
}

function Loading(){
  return <h1>loading...</h1>
}

export default App;
