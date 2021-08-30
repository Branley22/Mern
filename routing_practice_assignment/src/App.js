import React from 'react';
import './App.css';

import {Router} from '@reach/router';
import Home from './Components/Home';
import WordComponent from './Components/WordComponent';

function App() {
  return (
    <div className="App">
      <Router>

        <Home path="/home" />
        <WordComponent path="/:word"/>
        <WordComponent path="/:word/:color/:bgColor"/>
        
      </Router>
    </div>
  );
}

export default App;
