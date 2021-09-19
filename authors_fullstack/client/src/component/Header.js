import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';

const Header = (props)=>{

  const {headerText, headerPath} = props;

  return(
    <div>
        {/* <li><Link to="/authors">Home</Link></li>
        <li><Link to="/authors/new">Add an author</Link></li> */}
        <Link to=
        {headerPath}>
        {headerText}
        </Link>
    </div>
  )
}
export default Header;