import React, { useState } from 'react';
const ClickCounter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Button Click Counter</h1>
      <p>Number of clicks: {count}</p>
      <button onClick={handleClick}>Click Me!</button>
    </div>
  );
};
export default ClickCounter;
