
import './App.css';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Person from './components/Person';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Person/>
      </ErrorBoundary>
    </div>
  );
}

export default App;
