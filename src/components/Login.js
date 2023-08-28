import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log('Logging in...');
  };

  return (
    <div className='container'>
      <div className='card'>
      <form onSubmit={handleSubmit}>
        <h2 className='card-title'>Login</h2>
        <div >
          <label>Email:</label>
          <input
          className='card form input'
            type="email"
            value={email}
            placeholder='Enter email address'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
          className='card form input'
            type="password"
            value={password}
            placeholder='Enter your password'
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className='card form button' type="submit">Login</button>
      </form>
    
      <p>
        <Link to="/forgot-password" style={{textAlign:'center'}}>Forgot Password?</Link>

      </p>
      <p>
         <Link to="/register" >Don't have an account?</Link>
      </p>
    </div>
    </div>
  );
}

export default Login;

