import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import DeleteProduct from './DeleteProduct';

const OneProduct = (props)=>{

  const [OneProduct, setOneProduct] = useState({});
  useEffect(()=>{
    axios.get(`http://localhost:8000/api/products/${props.id}`)
    .then((res)=>{
      console.log(res);
      console.log(res.data);
      setOneProduct(res.data);
    })
    .catch((err)=>console.log(err));
  },[])


  return(
    <div>
      <p>{OneProduct.title}</p>
      <p>{OneProduct.price}</p>
      <p>{OneProduct.description}</p>
      <DeleteProduct id={OneProduct._id}/>
    </div>
  )
}
export default OneProduct;