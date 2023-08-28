import React, { useState } from 'react';
import { API_BASE_URL } from '../config';
function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_BASE_URL}/forgot-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='container'>
      
      <div className='card'>
      <h2 className='card-title'>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <input
        className='card form input'
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className='card form button' type="submit">Reset Password</button>
        <p style={{color:'black'}}>{message}</p>
      </form>
      </div>
      
    </div>
  );
}

export default ForgotPassword;
