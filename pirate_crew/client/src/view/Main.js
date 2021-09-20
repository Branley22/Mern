import React, {useState, useEffect} from 'react';
import {Link, navigate} from '@reach/router';
import CreatePirate from '../components/CreatePirate';
import DisplayAll from '../components/DisplayAll';

const Main = (props)=>{

  const [pirateList, setPirateList] = useState([]);
  const [newPirate, setNewPirate] = useState({});


  return(
    <div>
      <CreatePirate
      newPirate={newPirate} setNewPirate={setNewPirate} pirateList={pirateList} setPirateList={setPirateList}
      />
      <DisplayAll
      pirateList={pirateList} setPirateList={setPirateList} pirateList={pirateList} setPirateList={setPirateList}
      />
    </div>
  )
}

export default Main;

