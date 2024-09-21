import React, { useState } from 'react';

const ValidatedForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    }
    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    alert(`Name: ${formData.name}\nEmail: ${formData.email}`);
    setFormData({ name: '', email: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </label>
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
      </div>

      <div>
        <label>
          Email:
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </label>
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ValidatedForm;
