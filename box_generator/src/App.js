import React, { useState } from 'react';
import Form from './components/Form'
import Display from './components/Display';
import './App.css';

function App() {

  const [ boxColorArray, setBoxColorArray ] = useState([]);

  return (
    <div className="App">
      <h1>Standard Assignment</h1>
      <Form boxColorArray={ boxColorArray } setBoxColorArray={ setBoxColorArray }/>
      <Display boxColorArray={ boxColorArray } />
      <hr />
    </div>
  );
}

export default App;
