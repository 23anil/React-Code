import React, { useState, useCallback } from 'react';

const ExampleComponent = () => {
  const [count, setCount] = useState(0);

  // Without useCallback
  const handleClickWithoutCallback = () => {
    console.log('Button clicked!');
    setCount(count + 1);
  };

  // With useCallback
  const handleClickWithCallback = useCallback(() => {
    console.log('Button clicked!01');
    setCount(count);
  }, [count]); // Specify dependencies that should trigger a new callback if changed

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClickWithoutCallback}>
        Click without useCallback
      </button>

      <button onClick={handleClickWithCallback}>
        Click with useCallback
      </button>
    </div>
  );
};

export default ExampleComponent;
