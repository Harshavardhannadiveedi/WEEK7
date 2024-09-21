import React from 'react';

const ItemList = () => {
  const items = ['Apple', 'Banana', 'Biryani', 'Noodles', 'Ice cream'];

  return (
    <div>
      <h1>Fruits List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
