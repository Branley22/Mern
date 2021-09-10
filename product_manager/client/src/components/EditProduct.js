import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import Form from '../components/Form';

const EditProduct = (props)=>{

  const [editedProduct, setEditedProduct] = useState({
    title:"",
    price:"",
    description:""
  })

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/products/${props.id}`)
    .then((res)=>{
      console.log(res.data);
      setEditedProduct(res.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])

  const EditProductHandler = (e) =>{
    e.preventDefault();
    axios.put(`http://localhost:8000/api/products/${props.id}`,
    //request's body that the backend is asking for (controller)
    editedProduct
    )
    .then((res=>{
      console.log(res);
      console.log(res.data);
      //redirection, no reload, just rerender
      navigate("/products");
    }))
  }


  return(
    <div>
      <Form 
      submitHandler={EditProductHandler} 
      buttonText="Update Product"
      product={editedProduct}
      setProduct={setEditedProduct}/>
    </div>
  )
}
export default EditProduct;