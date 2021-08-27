import React from 'react';
import './App.css';

import {Router} from '@reach/router';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home" />
        <Home path="/:word" />
        <Home path="/:word/:font/:bcolor" />
      </Router>
    </div>
  );
}

export default App;
