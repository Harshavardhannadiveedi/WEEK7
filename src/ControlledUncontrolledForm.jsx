import React, { useRef, useState } from 'react';

const ControlledUncontrolledForm = () => {
  const [controlledValue, setControlledValue] = useState('');
  const uncontrolledRef = useRef(null);

  const handleControlledChange = (event) => {
    setControlledValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Controlled Input: ${controlledValue}\nUncontrolled Input: ${uncontrolledRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Controlled Input:
          <input 
            type="text" 
            value={controlledValue} 
            onChange={handleControlledChange} 
            required 
          />
        </label>
      </div>

      <div>
        <label>
          Uncontrolled Input:
          <input 
            type="text" 
            ref={uncontrolledRef} 
            required 
          />
        </label>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ControlledUncontrolledForm;
