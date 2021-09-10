import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link,navigate} from '@reach/router';

const OneCartoon = (props) => {

  const [OneCartoon, setOneCartoon] = useState({});

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/cartoons/${props.id}`)
    .then((res)=>{
      console.log(res);
      console.log(res.data);
      setOneCartoon(res.data);
    })
    .catch((err)=>console.log(err))
  },[])

  return (
    <div>
      <p>{OneCartoon.name}</p>
      <img src={OneCartoon.img} alt="image" />
      <p>{OneCartoon.era}</p>
      <p>{OneCartoon.genre}</p>
      <p>{OneCartoon.rating}</p>
      {/* This is a ternary opertor */}
      {
        OneCartoon.suitableForKids === true?
        <p>Kid Friendly? Yes</p>
        :<p>Kid Friendly? No</p>
      }

    </div>
  )
}

export default OneCartoon;