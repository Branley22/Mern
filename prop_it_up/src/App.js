import React from 'react';
import PersonCard from './components/PersonCard';
import './App.css';

function App() {
  return (
    <div className="App">
    <PersonCard 
      title={"Doe, Jane"} 
      age={45} 
      hairColor={"Black"} />
    <PersonCard 
      title={"Smith, John"} 
      age={88} 
      hairColor={"Brown"} />
    <PersonCard 
      title={"Fillmore, Millard"} 
      age={50} 
      hairColor={"Brown"} />
    <PersonCard 
      title={"Smith, Maria"} 
      age={62} 
      hairColor={"Brown"} />
    </div>
  );
}

export default App; 
