import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';

const Header = (props)=>{


  return(
    <div>
      <ul>
        <li><Link to="/authors">Home</Link></li>
        <li><Link to="/authors/new">Add an author</Link></li>
      </ul>
    </div>
  )
}
export default Header;