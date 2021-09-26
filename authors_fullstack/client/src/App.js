import logo from './logo.svg';
import './App.css';
import {Router} from '@reach/router';
import Header from './component/Header';
import AllAuthors from './component/AllAuthors';
import NewAuthor from  './component/NewAuthor';
import OneAuthor from './component/OneAuthor';
import EditAuthor from './component/EditAuthor';
import Login from './component/Login';
import LogReg from './views/LogReg';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <LogReg path="/"/>
        <Login path="/login"/>
        <AllAuthors default/>
        <NewAuthor path='/authors/new/'/>
        <OneAuthor path='/authors/:id'/>
        <EditAuthor path='/authors/edit/:id'/>
      </Router>
    </div>
  );
}

export default App;
