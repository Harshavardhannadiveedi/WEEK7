import React from 'react';
const UserInfo = (props) => {
  const { name, age } = props;
  return (
    <div>
      <h1>User Information</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default UserInfo;
