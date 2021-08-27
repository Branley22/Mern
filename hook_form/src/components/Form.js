import React, { useState } from 'react';

const Form = (props) => {
  const [ firstName, setFirstName ] = useState("");
  const [ lastName, setLastName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ confirmPassword, setConfirmPassword ] = useState("");

  return (
    <div className="container">
      <form>
        <div className="input">
          <label>First Name</label>
          <input type="text" value={ firstName } onChange={ (e) => setFirstName(e.target.value)}/>
        </div>
        <div className="input">
          <label>Last Name</label>
          <input type="text" value={ lastName } onChange={ (e) => setLastName(e.target.value)}/>
        </div>
        <div className="input">
          <label>Email</label>
          <input type="text" value={ email } onChange={ (e) => setEmail(e.target.value)}/>
        </div>
        <div className="input">
          <label>Password</label>
          <input type="password" value={ password } onChange={ (e) => setPassword(e.target.value)}/>
        </div>
        <div className="input">
          <label>Confirm Password</label>
          <input type="password" value={ confirmPassword } onChange={ (e) => setConfirmPassword(e.target.value)}/>
        </div>
      </form>

      <h3>Form Data</h3>
      <div className="data">
        <p>
          <label>First Name: </label> { firstName }
        </p>
        <p>
          <label>Last Name: </label> { lastName }
        </p>
        <p>
          <label>Email: </label> { email }
        </p>
        <p>
          <label>Password: </label> { password }
        </p>
        <p>
          <label>Confirm Password: </label> { confirmPassword }
        </p>
      </div>
    </div>
  )
}

export default Form;