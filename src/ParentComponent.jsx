import React, { useState } from 'react';
import ChildComponent from './ChildComponent'; 
const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent count={count} increment={incrementCount} />
    </div>
  );
};

export default ParentComponent;
