import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';

const DeleteAuthor = (props)=>{

  const {id, authorList, setAuthorList} = props;

  const deleteFilter = (id)=>{
    let newList = authorList.filter((author)=>
    author._id !== id)
    setAuthorList(newList);
  }

  const deleteHandler = (e) =>{
    axios.delete(`http://localhost:8000/api/authors/${id}`)
    .then((res)=>{
      console.log(res.data);
      if (authorList){
        deleteFilter(id);
      }
      else {
        navigate('/')
      }
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  return(
    <div>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  )
}
export default DeleteAuthor;