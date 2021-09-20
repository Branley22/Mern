import {Router} from '@reach/router';
import Main from './view/Main';
import OnePirate from './view/OnePirate';
import UpdatePirate from './components/UpdatePirate';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path='/'/>
        <OnePirate path='/pirates/:id'/>
        <UpdatePirate path='/pirates/edit/:id'/>
      </Router>
    </div>
  );
}

export default App;
