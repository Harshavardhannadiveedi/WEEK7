import React from 'react';
const EventPropagationComponent = () => {
  const handleParentClick = (event) => {
    alert('Parent clicked!');
  };
  const handleChildClick = (event) => {
    alert('Child clicked!');
  };
  return (
    <div
      onClick={handleParentClick}
      style={{ padding: '20px', border: '2px solid blue' }}
    >
      Parent
      <div
        onClick={handleChildClick}
        style={{ padding: '20px', border: '2px solid green', marginTop: '10px' }}
      >
        Child
      </div>
    </div>
  );
};

export default EventPropagationComponent;
