import React from 'react';
const DisplayValue = ({ value, increment, decrement }) => {
  return (
    <div>
      <h2>Value: {value}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default DisplayValue;
