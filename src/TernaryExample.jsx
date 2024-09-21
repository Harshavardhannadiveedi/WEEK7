import React, { useState } from 'react';

const TernaryExample = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn((prev) => !prev);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>Welcome back!</h1>
          <button onClick={toggleLogin}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Please log in.</h1>
          <button onClick={toggleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default TernaryExample;
