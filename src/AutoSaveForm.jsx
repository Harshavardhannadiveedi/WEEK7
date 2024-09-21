import React, { useState, useEffect } from 'react';

const AutoSaveForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('formData'));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
        />
      </label>
      <br />
      <label>
        Email:
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AutoSaveForm;
