import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';


const DeletePet = (props) =>{

  const {id, petList, setPetList} = props;

  const deleteFilter = (id)=>{
    let newList = petList.filter((pet)=>
    pet._id !== id)
    setPetList(newList);
  }

  const deleteHandler = (e)=>{
    axios.delete(`http://localhost:8000/api/pets/${id}`)
    .then((res)=>{
      console.log(res.data);
      if(petList){
        deleteFilter(id);
      }
      else{
        navigate("/");
      }
    })
    .catch((err)=>console.log(err))
  }



  return(
    <div>
      <button className="adoptbtn" onClick={deleteHandler}>Adopt Pet</button>
    </div>
  )
}
export default DeletePet;