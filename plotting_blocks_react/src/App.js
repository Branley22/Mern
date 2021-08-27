import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import SubContents from './components/SubContents';
import Advertisment from './components/Advertisment';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="section2">
        <Navigation />
        <Main>
          <SubContents />
          <SubContents />
          <SubContents />
          <Advertisment />
        </Main>
      </div>
    </div>
  );
}

export default App;
