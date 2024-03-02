import React, { useState } from 'react';

function AdminRegister() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  }

  return (
    <div>
      <h2>Admin Register</h2>

      <div className="form-container">
        <form onSubmit={submitForm}>
          <div>
            <label htmlFor="name">Name:</label>
            <input 
              type="text"
              id="name"
              name="name" 
              required
            />
          </div>

          <div>
            <label htmlFor="email">Email:</label>    
            <input
              type="email"
              id="email"
              name="email"
              required 
            />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              required
            />
          </div>

          <div>
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone" 
              name="phone"
              pattern="[0-9]{10}"
              maxlength="10"
              required
            />
          </div>

          <button type="submit">Register</button>
        </form>
        
        {isSubmitted && (
          <div className="success-msg">
            <p>You are registered successfully!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminRegister;