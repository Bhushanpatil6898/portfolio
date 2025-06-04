import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple validation
    if (username === '' || password === '') {
      setError('Both fields are required');
      return;
    }

    // Simulate successful login
    alert('Logged in successfully');
    // You can replace this with actual login logic (API call, etc.)
  };

  return (
    <div
      className="App d-flex justify-content-center align-items-center"
      style={{ height: '100vh', backgroundColor: '#f4f4f9' }}
    >
      <div
        className="card p-4"
        style={{
          width: '100%',
          maxWidth: '400px',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={{
                fontSize: '16px',
                padding: '10px',
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                fontSize: '16px',
                padding: '10px',
              }}
            />
          </div>
          {error && (
            <p
              className="text-danger text-center"
              style={{ fontSize: '14px' }}
            >
              {error}
            </p>
          )}
          <button
            type="submit"
            className="btn btn-primary w-100"
            style={{
              padding: '10px',
              fontSize: '16px',
              borderRadius: '4px',
            }}
          >
            Login
          </button>
        </form>
        <div className="text-center mt-3">
          <p>
            Forgot your password?{' '}
            <a href="#" style={{ textDecoration: 'none' }}>
              Reset it here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
