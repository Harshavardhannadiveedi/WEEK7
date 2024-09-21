import React from 'react';
import UserCard from './UserCard';  // Adjust the path if necessary

const UserList = () => {
  const users = [
    { id: 1, name: 'Harsha', email: 'harsha@example.com', age: 19 },
    { id: 2, name: 'Bittu', email: 'Bittu@example.com', age: 20 },
    { id: 3, name: 'pandu', email: 'pandu@example.com', age: 20 },
    { id: 4, name: 'jeshu', email: 'jeshu@example.com', age: 18 },
  ];

  return (
    <div>
      <h1>User List</h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
