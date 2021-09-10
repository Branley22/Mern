import React from 'react';
import {Router} from '@reach/router';
import Header from './components/Header';
import AllProducts from './components/AllProducts';
import NewProduct from './components/NewProduct';
import OneProduct from './components/OneProduct';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
      <AllProducts default path="/products"/>
      <NewProduct path="/products/new"/>
      <OneProduct path="/products/:id"/>
      </Router>
    </div>
  );
}

export default App;
