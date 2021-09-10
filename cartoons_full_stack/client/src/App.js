import logo from './logo.svg';
import './App.css';
import {Router} from '@reach/router';
//all paths 
import Header from './components/Header';
import AllCartoons from './components/AllCartoons';
import NewCartoon from './components/NewCartoon';
import OneCartoon from './components/OneCartoon';


function App() {
  return (
    <div className="App">
      {/* router allows to move through single application */}
      <Header />
      <Router>
        <AllCartoons default path="/cartoon" />
        <NewCartoon path="/cartoon/new" />
        <OneCartoon path="/cartoon/:id" />
      </Router>
    </div>
  );
}

export default App;
