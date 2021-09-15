import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import Form from '../components/Form';
import OnePet from './OnePet';


const EditPet = (props) =>{

  const [errors, setErrors] = useState({});
  const [editedPet, setEditedPet] = useState({
    name:"",
    type:"",
    description:"",
    skill1:"",
    skill2:"",
    skill3:"" 
  })

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/pets/${props.id}`)
    .then((res)=>{
      console.log(res.data);
      setEditedPet(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])

  const editPetHandler = (e)=>{
    e.preventDefault();
    axios.put(`http://localhost:8000/api/pets/${props.id}`,
    editedPet
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
      <p style={{fontSize:"25px", paddingLeft:"20px"}}>Edit {editedPet.name}</p>
      <Form
      submitHandler={editPetHandler}
      buttonText="Edit Pet"
      pet={editedPet}
      setPet={setEditedPet}
      errors={errors}
      />
    </div>
  )
}
export default EditPet;