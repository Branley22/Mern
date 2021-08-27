import React, { useState } from 'react';
import Context from './Context/Context';
import Navbar from './Component/Navbar';
import FormWrapper from './Component/FormWrapper';
import './App.css';

function App() {
  const [nameInput, setNameInput] = useState('');
  return (
  <div>
    <Wrapper>
      <Navbar />
      <FormWrapper />
    </Wrapper>
  </div>
  );
}

export default App;
