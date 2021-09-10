import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';

const Header = (props)=>{




  return(
    <div style={{border:"5px double grey"}}>
      <ul style={{display:"flex", justifyContent:"space-around", listStyle:"none"}}>
        <li><Link style={{textDecoration:"none", fontSize:"26px", color:"grey"}} to="/products">All Products</Link></li>
        <li><Link style={{textDecoration:"none", fontSize:"26px", color:"grey"}} to="/products/new">New Product</Link></li>
      </ul>
    </div>
  )
}
export default Header;