import React from 'react';
import './App.css';

import { Router } from '@reach/router';
import DisplayOne from './components/DisplayOne';
import Home from './view/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/"/>
        <DisplayOne path="/country/:countryCode"/>
        <DisplayOne path="/country/:countryCode/:rating"/>
        <DisplayOne path="/country/:countryCode/:rating/:review"/>
      </Router>
    </div>
  );
}

export default App;
