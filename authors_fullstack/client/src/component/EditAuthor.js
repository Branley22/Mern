import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import Form from '../component/Form';

const EditAuthor = (props)=>{

  const [errors, setErrors] = useState({});
  const [editedAuthor, setEditedAuthor] = useState({
    name:""
  })

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/authors/${props.id}`)
    .then((res)=>{
      console.log(res.data);
      setEditedAuthor(res.data);
    })
    .catch((err)=>{
      console.log(err);
      console.log(err.response.data.errors);
      setErrors(err.response.data.errors);
    })
  },[])

  const editAuthorHandler = (e)=>{
    e.preventDefault();
    axios.put(`http://localhost:8000/api/authors/${props.id}`,
    editedAuthor
    )
    .then((res)=>{
      console.log(res.data);
      navigate('/authors');
    })
  }

  return(
    <div>
      <Form
      submitHandler={editAuthorHandler}
      buttonText="Update Author"
      author={editedAuthor}
      setAuthor={setEditedAuthor}
      errors={errors}/>
    </div>
  )
}
export default EditAuthor;