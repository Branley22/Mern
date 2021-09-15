import logo from './logo.svg';
import './App.css';
import {Router} from '@reach/router';
import Header from './components/Header';
import EditPet from './components/EditPet';
import NewPet from './components/NewPet';
import OnePet from './components//OnePet';
import AllPets from './components/AllPets';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <AllPets default path='/pets'/>
        <NewPet path='/pets/new'/>
        <OnePet path='/pets/:id'/>
        <EditPet path='/pets/edit/:id'/>
      </Router>
    </div>
  );
}

export default App;
