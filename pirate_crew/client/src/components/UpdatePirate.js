import React, {useState, useEffect} from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';
import Form from './Form';

const UpdatePirate = (props)=>{

  const [errors, setErrors] = useState({});  
  const [updatedPirate, setUpdatedPirate] = useState({
    name:'',
    age:''
  })

  const {id} = props;

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/pirates/${id}`)
    .then((res)=>{
      console.log(res.data);
      setUpdatedPirate(res.data)
    })
    .catch((err)=>{
      console.log(err);
      console.log(err.response.data.errors);
      setErrors(err.response.data.errors);
    })
  },[])

  const updateHandler = (e)=>{
    e.preventDefault();
    axios.put(`http://localhost:8000/api/pirates/${id}`,
    updatedPirate
    )
    .then((res)=>{
      console.log(res);
      navigate('/');
    })
    .catch((err)=>{
      console.log(err);
    })
  }


  return(
    <div>
      <Form 
      pirate={updatedPirate} 
      setPirate={setUpdatedPirate} 
      submitHandler={updateHandler}
      errors={errors}/>
    </div>
  )
}

export default UpdatePirate;
