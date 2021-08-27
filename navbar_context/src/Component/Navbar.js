import React, { useContext } from 'react';
import Context from './../Context/Context';

const Navbar = () => {
  const { nameInput } = useContext(Context);
  
  return (
      <div>
        <span>Hello, {nameInput}</span>
      </div>
  )
}

export default Navbar;