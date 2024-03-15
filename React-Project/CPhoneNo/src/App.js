import { Suspense } from 'react';
import './App.css';
import CPN from './Components/CPN';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<h1>Loading...</h1>}>
      <CPN/>
      </Suspense>
 
    </div>
  );
}

export default App;
