import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const RegisterComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
   
    console.log('Registering:', { username, password });
   
    navigate('/login');
  };

  return (
    <div className="register-container">
      
      <div className="background-giphy">
        <iframe 
          src="https://giphy.com/embed/F2NiLnKoooDXa2RZq1" 
          width="100%" 
          height="100%" 
          style={{position: 'absolute', top: 0, left: 0, zIndex: -1, pointerEvents: 'none'}} 
          frameBorder="0" 
          allowFullScreen
        ></iframe>
      </div>
      
      <div className="register-form-container">
        <div className="form-box">
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email</label>
              <input 
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                required 
                placeholder="Email or phone number"
              />
            </div>
            <div>
              <label>Password</label>
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
                placeholder="Enter password"
              />
            </div>
            <div>
              <label>Confirm Password</label>
              <input 
                type="password" 
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)} 
                required 
                placeholder="Confirm password"
              />
            </div>
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
