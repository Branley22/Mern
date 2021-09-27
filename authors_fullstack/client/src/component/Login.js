import React, {useState} from 'react';  
import axios from 'axios';
import { navigate } from '@reach/router';

const Login = (props)=>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // const handleChange = (e)=>{
  //   setEmail({
  //     ...email,
  //     [e.target.name]: e.target.value
  //   })
  // }

  const login = (e) =>{
    e.preventDefault();
    axios.post('http://localhost:8000/api/users/login',{
      email: email,
      password: password,
    },
    {
      withCredentials: true,
    })
    .then((res)=>{
      console.log(res.cookie, "cookie");
      console.log(res, "res");
      console.log(res.data, "is res data");
      navigate("/authors");
    })
    .catch((err)=>{
      console.log(err.response);
      setErrorMessage(err.response.data.message);
    })
};

return(
  <div>
    <h2>Login</h2>
    <p className="error-text">{errorMessage? errorMessage : ""}</p>
    <form onSubmit={login}>
      <div>
        <label>Email</label>
        {
          errorMessage.email?
          <span className="error-text">{errorMessage.email.message}</span>
          :null
        }
        <input type="email" name="email" value={email.email} onChange={(e)=> setEmail(e)}/>
      </div>
      <div>
        <label>Password</label>
        {
          errorMessage.password?
          <span className="error-text">{errorMessage.password.message}</span>
          :null
        }
        <input type="password" name="password" value={password.password} onChange={(e)=> setPassword(e)}/>
      </div>
      <button type="submit">Sign in</button>
    </form>
    </div>
);
};

export default Login;