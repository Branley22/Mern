import React, {useState, useEffect} from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';

const DeletePirate = (props)=>{

  const {id, deleteFilter} = props;

  const deleteHandler = (e)=>{
    axios.delete(`http://localhost:8000/api/pirates/${id}`)
    .then((res)=>{
      console.log(res.data);
      if(deleteFilter){
      deleteFilter(id);
      }
      else{
        console.log(res.data);
        navigate("/");
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

export default DeletePirate;
