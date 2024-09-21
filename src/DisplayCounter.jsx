import React, { useState } from 'react';

const DisplayCounter = ({ initialCount }) => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <div>
      <h2>Initial Count from Props: {initialCount}</h2>
      <h2>Click Count from State: {clickCount}</h2>
      <button onClick={handleClick}>Click Me!</button>
    </div>
  );
};

export default DisplayCounter;

