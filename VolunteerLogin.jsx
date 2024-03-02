import React from 'react';

const styles = {
  body: {
    background: '#f1f1f1',
    fontFamily: 'Arial, sans-serif'
  },
  loginContainer: {
    maxWidth: 350,
    margin: '200px auto',
    padding: 30,
    background: '#fff',
    borderRadius: 10, 
    boxShadow: '0px 0px 10px rgba(0,0,0,0.1)'
  },
  h2: {
    textAlign: 'center',
    marginBottom: 40,
    color: '#5b85f7',
    textTransform: 'uppercase',
    letterSpacing: 2
  },
  form: {
    display: 'flex', 
    flexDirection: 'column'
  },
  label: {
    fontWeight: 600,
    color: '#333'
  },
  input: {
    padding: 10,
    marginBottom: 20,
    border: '2px solid #d9e7fa',
    borderRadius: 5
  },
  button: {
    padding: 12,
    background: '#74edeb',
    border: 'none',
    color: '#fff',
    borderRadius: 5,
    textTransform: 'uppercase', 
    letterSpacing: 2,
    transition: 'background 0.3s ease' 
  },
  buttonHover: {
    background: '#58d7d3',
    cursor: 'pointer'
  },
  p: {
    textAlign: 'center',
    marginTop: 20,
    color: '#74edeb'
  }
};

function Login() {
  return (
    <div style={styles.loginContainer}>
      <h2 style={styles.h2}>Volunteer Login</h2>

      <form style={styles.form}>
        <div>
          <label style={styles.label}>Email:</label>
          <input type="email" required 
            style={styles.input} />
        </div>

        <div>
          <label style={styles.label}>Password:</label>    
          <input type="password" required
            style={styles.input} /> 
        </div>

        <button type="submit"
          style={styles.button}>Login</button> 
      </form>

      <p style={styles.p}>You are logged in successfully!</p>

    </div>
  ); 
}

export default function App() {
  return (
    <div style={styles.body}>
      <Login />
    </div>
  );
}