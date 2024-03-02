import React, { useState } from 'react';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secretKey, setSecretKey] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your login logic for admin goes here
    // For simplicity, let's assume the secret key is "admin123"
    if (email === 'admin@example.com' && password === 'admin' && secretKey === 'admin123') {
      setLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-box">
      <h2 >Admin Login</h2>
      <form onSubmit={handleSubmit} >
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} required />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginBottom: '5px' }}>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} required />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginBottom: '5px' }}>Secret Key:</label>
          <input type="password" value={secretKey} onChange={(e) => setSecretKey(e.target.value)} style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} required />
        </div>
        <button type="submit" style={{ backgroundColor: '	#E6E6FA', color: '#1029', border: 'none', borderRadius: '5px', padding: '10px 15px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>Login</button>
      </form>
      {loggedIn && <p style={{ textAlign: 'center', marginTop: '20px', color: 'green' }}>You are logged in as an admin!</p>}
    </div>
  );
};

export default AdminLogin;