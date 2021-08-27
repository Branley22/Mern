import PersonCard from './components/PersonCard';
import './App.css';

function App() {
  const personObject = [
    {
      name: "Doe, John",
      age: 45,
      hairColor: "Black",
    },
    {
      name: "Smith, John",
      age: 88,
      hairColor: "Brown",
    }
  ];
  return (
    <div className="App">
      {
        personObject.map((object, index) => (
          <PersonCard key = {index}
            name={object.name}
            age={object.age}
            hairColor={object.hairColor}
          />
        ))
      }
    </div>
    
  );
}

export default App;
