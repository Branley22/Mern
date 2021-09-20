import React, {useState, useEffect} from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';
import Form from './Form';
const CreatePirate = (props)=>{

  const [errors,setErrors] = useState({});
  const {pirateList, setPirateList} = props;
  const [newPirate, setNewPirate] = useState({
    name:'',
    age:''
  })

  const newPirateHandler = (e)=>{
    e.preventDefault();
    axios.post('http://localhost:8000/api/pirates',
    newPirate
    )
    .then((res)=>{
      console.log(res);
      setPirateList([...pirateList, res.data])

      setNewPirate({
        name: '',
        age:''
      })
    })
    .catch((err)=>{
      console.log(err);
      console.log(err.response.data.errors);
      setErrors(err.response.data.errors);
    })
  }


  return(
    <div>
      <Form 
      pirate={newPirate} 
      setPirate={setNewPirate} 
      submitHandler={newPirateHandler}
      errors={errors}/>
    </div>
  )
}

export default CreatePirate;
