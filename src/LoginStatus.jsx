import React, { useState } from 'react';

const LoginStatus = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  let message;

  if (isLoggedIn) {
    message = (
      <div>
        <h1>Welcome back!</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  } else {
    message = (
      <div>
        <h1>Please log in.</h1>
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }

  return <div>{message}</div>;
};

export default LoginStatus;
