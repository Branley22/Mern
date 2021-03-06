import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import Form from '../component/Form';
import Header from '../component/Header';

const NewAuthor = (props)=>{

  const [errors, setErrors] = useState({});
  const [NewAuthor, setNewAuthor] = useState({
    name:""
  })

  const newSubmitHandler = (e)=>{
    e.preventDefault();
    axios.post('http://localhost:8000/api/authors',
    NewAuthor,
    {
      withCredentials: true
    }
    )
    .then((res)=>{
      console.log(res.data);
      navigate('/authors/');
    })
    .catch((err)=>{
      console.log(err);
      console.log(err.response.data.errors);
      if(err.response.status === 401){
        navigate("/");
      }
      if(err.response.data.errors){
        setErrors(err.response.data.errors)
      }
      // setErrors(err.response.data.errors);
    })
  }

  return(
    <div>
      {/* <Header 
      headerText='home'
      headerPath={`/authors/`}/> */}
      {/* <li><Link to="/authors">Home</Link></li> */}
      <Form
      submitHandler={newSubmitHandler}
      buttonText="Add New Author"
      author={NewAuthor}
      setAuthor={setNewAuthor}
      errors={errors}/>
    </div>
  )
}
export default NewAuthor;