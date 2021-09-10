import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';

const DeleteProduct = (props)=>{

  const {id, productList, setProductList} = props;

  const deleteFilter = (id)=>{
    let newList = productList.filter((product)=>
    product._id !== id)
    // if the current product does not equal or match the id being passed in then return a list of those
    setProductList(newList);
  }

  const deleteHandler = (e) =>{
    axios.delete(`http://localhost:8000/api/products/${id}`)
    .then((res)=>{
      console.log(res.data)
      deleteFilter(id);
    })
    .catch((err)=>console.log(err))
  }


  return(
    <div>
      <button onClick={deleteHandler}>Delete Product</button>
    </div>
  )
}
export default DeleteProduct;