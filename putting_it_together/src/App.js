import React from 'react';
import PersonCard from './components/PersonCard';
import './App.css';

function App() {
  return(
    <div>
          <PersonCard
            name={"Minaya, Branley"}
            age={23}
            hairColor={"black"}
          />
          <PersonCard
            name={"Minaya, Val"}
            age={21}
            hairColor={"brown"}
          />
    </div>

  );
}

export default App;
