import React, { useState } from 'react';

const EventHandlingComponent = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    alert(`Button clicked! Current input value: ${inputValue}`);
  };

  return (
    <div>
      <label>
        Input:
        <input 
          type="text" 
          value={inputValue} 
          onChange={handleChange} 
        />
      </label>
      <br />
      <button onClick={handleClick}>Show Input Value</button>
    </div>
  );
};

export default EventHandlingComponent;
