import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link,navigate} from '@reach/router';

const DeleteCartoon = (props) => {

  const {id, cartoonList, setCartoonList} = props;

  //filtermethod
  const deleteFilter = (id) => {
    let newList = cartoonList.filter((cartoon)=>
    cartoon._id !== id);
    setCartoonList(newList);
  }

  const deleteHandler = (e) =>{
    axios.delete(`http://localhost:8000/api/cartoons/${id}`)
    .then((res)=>{
      console.log(res.data)
      //pass in filtermethod
      deleteFilter(id);
    })
    .catch((err)=>console.log(err));
  }


  return (
    <div>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  )
}

export default DeleteCartoon;