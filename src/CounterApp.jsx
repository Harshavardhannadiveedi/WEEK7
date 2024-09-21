import React from 'react';
import DisplayCounter from './DisplayCounter';
const CounterApp = () => {
  const initialCount = 10;

  return (
    <div>
      <h1>Props vs State Example</h1>
      <DisplayCounter initialCount={initialCount} />
    </div>
  );
};

export default CounterApp;
