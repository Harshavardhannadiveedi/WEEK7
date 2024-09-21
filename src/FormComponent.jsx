import React, { useState } from 'react';

const FormComponent = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitted: ${inputValue}`);
    setInputValue(''); // Clear the input after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Input:
        <input 
          type="text" 
          value={inputValue} 
          onChange={handleChange} 
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
