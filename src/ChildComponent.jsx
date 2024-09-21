import React from 'react';
const ChildComponent = ({ count, increment }) => {
  return (
    <div>
      <h2>Current Count: {count}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default ChildComponent;
