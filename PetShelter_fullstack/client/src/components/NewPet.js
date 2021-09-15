import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import Form from '../components/Form';


const NewPet = (props) =>{

  const [errors,setErrors] = useState({});
  const [newPet, setNewPet] = useState({
    name:"",
    type:"",
    description:"",
    skill1:"",
    skill2:"",
    skill3:""
  })

  const newSubmitHandler = (e)=>{
    e.preventDefault();
    axios.post("http://localhost:8000/api/pets/",
    newPet
    )
    .then((res)=>{
      console.log(res);
      console.log(res.data);
      navigate("/pets/")
    })
    .catch((err)=>{
      console.log(err);
      console.log(err.response.data.errors);
      setErrors(err.response.data.errors);
    })
  }



  return(
    <div>
      <h3 style={{paddingLeft:"20px", fontSize:"35px"}}>Know a pet needing a home?</h3>
      <Form
      submitHandler={newSubmitHandler}
      buttonText="Add Pet"
      pet={newPet}
      setPet={setNewPet}
      errors={errors}
      
      />
    </div>
  )
}
export default NewPet;