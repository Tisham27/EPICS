import React, {useState} from 'react';

function VolunteerRegister() {

  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  }

  return (
    <div>
      <h2>Volunteer Register</h2>

      <div className="form-container">

        <form onSubmit={submitForm}>

          <div>
            <label>Name:</label>   
            <input type="text" required />
          </div>

          <div>
            <label>Email:</label>
            <input type="email" required />
          </div>

          <div>
            <label>Password:</label>  
            <input type="password" required />
          </div>

          <div>
            <label>Confirm Password:</label>
            <input type="password" required />
          </div>

          <div>
            <label>Date of Birth:</label>
            <input type="date" required />
          </div>

          <button type="submit">Submit</button>

        </form>

        {isSubmitted && <p className="success">Registered!</p>}

      </div>
    </div>
  );

}

export default VolunteerRegister;