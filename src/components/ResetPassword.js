import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_BASE_URL } from '../config';

function ResetPassword() {
  const {token} = useParams();
  const [tokenValid, setTokenValid] = useState(null); 
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  // console.log(match.params.token);

  useEffect(() => {
    const checkTokenValidity = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/reset-token/${token}`);
        const data = await response.json();
        setTokenValid(data.tokenValid);
      } catch (error) {
        console.error('Error:', error);
        setError('An error occurred while checking token validity.');
      }
    };

    checkTokenValidity();
  }, [token]);


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_BASE_URL}/reset-password/${token}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred while resetting the password.');
    }
  };

  return (
    <div className='container'>
      {tokenValid === null ? (
        <p>Loading...</p>
      ) : !tokenValid ? (
        <p>Invalid or expired token</p>
      ) : (
        <div className='card'>
          <h2 className='card-title'>Reset Password</h2>
          <form onSubmit={handleSubmit}>
            <input
            className='card form input'
              type="password"
              placeholder="Enter new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className='card form button' type="submit">Reset Password</button>
          </form>
          {error && <p className="error">{error}</p>}
          {message && <p style={{color:'black'}}>{message}</p>}
        </div>
      )}
    </div>
  );
}

export default ResetPassword;

