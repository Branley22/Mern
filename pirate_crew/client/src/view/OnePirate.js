import React, {useState, useEffect} from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';
import DeletePirate from '../components/DeletePirate';

const OnePirate = (props)=>{

  const {id} = props;
  const [onePirate, setOnePirate] = useState({});

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/pirates/${id}`)
    .then((res)=>{
      console.log(res.data);
      setOnePirate(res.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])


  return(
    <div>
      <p>{onePirate.name}</p>
      <p>{onePirate.age}</p>
      <DeletePirate id={id}/>
    </div>
  )
}

export default OnePirate;
