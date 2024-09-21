import React, { useState } from 'react';

const DynamicList = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = () => {
    if (inputValue) {
      setItems([...items, inputValue]);
      setInputValue(''); 
    }
  };

  const handleRemoveItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div>
      <h1>Dynamic List</h1>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Add an item"
      />
      <button onClick={handleAddItem}>Add Item</button>
      
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => handleRemoveItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DynamicList;
