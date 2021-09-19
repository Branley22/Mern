import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import DeleteAuthor from './DeleteAuthor';

const OneAuthor = (props)=>{

  const [oneAuthor, setOneAuthor] = useState({});

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/authors/${props.id}`)
    .then((res)=>{
      console.log(res);
      console.log(res.data);
      setOneAuthor(res.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])


  return(
    <div>
      {/* <li><Link to="/authors">Home</Link></li> */}
      <p>{oneAuthor.name}</p>
      <DeleteAuthor id={oneAuthor}/>
    </div>
  )
}
export default OneAuthor;