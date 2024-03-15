import React, { Suspense, useState } from "react";
import "./App.css";

const LazyP = React.lazy(() => import("./components/Person"));

function App() {
  const [show, setshow] = useState(false);
  return (
    <div className="App">
      <button
        onClick={() => {
          setshow(true);
        }}
      >
        show
      </button>
      {show && (
        <Suspense fallback={<h1>Loading...</h1>}>
          <LazyP />
        </Suspense>
     
      )}
    </div>
  );
}

export default App;
