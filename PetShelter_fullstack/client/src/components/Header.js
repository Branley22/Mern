import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';


const Header = (props) =>{




  return(
    <div>
      <div className="header-container">
        <h1 style={{fontSize:"50px"}}>Pet Shelter</h1>
        <ul>
            <li><Link to="/pets">back to home</Link></li>
            <li><Link to="/pets/new">add a pet to the shelter</Link></li>
        </ul>
        </div>
    </div>
  )
}
export default Header;