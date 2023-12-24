import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('username');
  const [password, setPassword] = useState('password');

  const handleLogin = (e) => {
    e.preventDefault();

    // Placeholder logic for handling login (authentication)
    if (username === 'username' && password === 'password') {
      // Successful login: Perform redirection or set authentication state
      console.log('Login successful!');
      // For redirection to another route, you can use react-router-dom's history.push('/')
    } else {
      // Failed login: Show error message or handle accordingly
      console.log('Invalid credentials. Please try again.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
