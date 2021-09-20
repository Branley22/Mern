import React, {useState, useEffect} from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';
import DeletePirate from './DeletePirate';

const DisplayAll = (props)=>{

  
  const {pirateList, setPirateList} = props;

  useEffect(()=>{
    axios.get('http://localhost:8000/api/pirates')
    .then((res)=>{
      console.log(res.data);
      setPirateList(res.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])

  const deleteFilter = (id)=>{
    console.log('deleted pirate');
    let newList = pirateList.filter((pirate)=> 
    pirate._id !== id);
    setPirateList(newList);
  }

  return(
    <div>
      {
        pirateList?
        pirateList.map((pirate,index)=>(
          <div key={index}>
            <Link to={`/pirates/${pirate._id}`}>
              <p>{pirate.name}</p>
            </Link>
            <p>{pirate.age}</p>
            <Link to={`/pirates/edit/${pirate._id}`}>
              <span>edit</span>
            </Link>
            <DeletePirate id={pirate._id} deleteFilter={deleteFilter}/>
          </div>
        ))
        :null
      }
    </div>
  )
}

export default DisplayAll;
