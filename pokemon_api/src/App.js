import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then((res) => {
        console.log(res);
        setPokemon(res.data.results)
    })
    .catch((err)=>console.log(err))
    
  }, []);
  
  return (
    <div style={{margin:"auto", width:"200px", textTransform: "capitalize"}}>
      <ul>
      {
        pokemon.map((eachPokemon, index) => {
          return (
            <li key={index}>
              {eachPokemon.name}
            </li>
          )
        })
      }
      </ul>
    </div>
  );
}

export default App;
