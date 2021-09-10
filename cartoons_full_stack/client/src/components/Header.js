import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link,navigate} from '@reach/router';

const Header = (props) => {



  return (
    <div style={{border:"5px double lightgrey"}}>
      <ul style={{display:"flex", justifyContent:"space-around", listStyle:"none"}}>
        <li><Link style={{textDecoration:"none", fontSize:"26px", color:"grey"}} to="/cartoons">All Cartoons</Link></li>
        <li><Link style={{textDecoration:"none", fontSize:"26px", color:"grey"}} to="/cartoon/new">New Cartoon</Link></li>
      </ul>
    </div>
  )
}

export default Header;