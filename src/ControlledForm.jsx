import React, { useState } from 'react';

const ControlledForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    isAgree: false,
    favoriteFruit: ''
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${formData.name}\nAgreed: ${formData.isAgree}\nFavorite Fruit: ${formData.favoriteFruit}`);
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
      </div>

      <div>
        <label>
          <input 
            type="checkbox" 
            name="isAgree" 
            checked={formData.isAgree} 
            onChange={handleChange} 
          />
          I agree to the terms and conditions
        </label>
      </div>

      <div>
        <label>
          Favorite Fruit:
          <select 
            name="favoriteFruit" 
            value={formData.favoriteFruit} 
            onChange={handleChange} 
            required
          >
            <option value="">Select a fruit</option>
            <option value="apple">Apple</option>
            <option value="banana">Banana</option>
            <option value="cherry">Cherry</option>
            <option value="date">Date</option>
          </select>
        </label>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ControlledForm;
