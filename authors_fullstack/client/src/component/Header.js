import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';

const Header = (props)=>{

  // const {headerText, headerPath} = props;

  const logout = (e)=>{
    e.preventDefault();
    axios.post('http://localhost:8000/api/users/logout', {
    }, {
      withCredentials: true,
    })
    .then((res)=>{
      console.log(res.data);
      navigate("/");
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  return(
    <header>
      <ul>
        <li><Link to="/authors">Home</Link></li>
        <li><Link to="/authors/new">Add an author</Link></li>
        {/* <Link to=
        {headerPath}>
        {headerText}
        </Link> */}
        <button onClick={logout}>Logout</button>
      </ul>
    </header>
  )
}
export default Header;