import React, { useState } from 'react';

const ShortCircuitEvaluation = () => {
  const [username, setUsername] = useState(null); // Change to null or a string

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Enter your username"
        onChange={handleChange} 
      />
      <div>
        {/* Short-circuit evaluation */}
        {username ? (
          <h1>Welcome, {username}!</h1>
        ) : (
          <h1>Please enter your username.</h1>
        )}
      </div>
    </div>
  );
};

export default ShortCircuitEvaluation;
