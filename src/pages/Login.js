import React, { useState } from 'react';

const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login process
    setLoggedIn(true);
  };

  return (
    <div>
      <h1>Login</h1>
      {!loggedIn ? (
        <form onSubmit={handleLogin}>
          <div>
            <label>Username: </label>
            <input type="text" required />
          </div>
          <div>
            <label>Password: </label>
            <input type="password" required />
          </div>
          <button type="submit">Login</button>
        </form>
      ) : (
        <p>You are now logged in!</p>
      )}
    </div>
  );
};

export default Login;
