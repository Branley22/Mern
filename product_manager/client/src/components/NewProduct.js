import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import Form from '../components/Form';

const NewProduct = (props)=>{

  const [newProduct, setNewProduct] = useState({
    title:"",
    price:"",
    description:""
  })

  const newSubmitHandler = (e) =>{
    e.preventDefault();
    axios.post('http://localhost:8000/api/products',
    //request's body that the backend is asking for (controller)
    newProduct
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
      submitHandler={newSubmitHandler} 
      buttonText="Add New Product"
      product={newProduct}
      setProduct={setNewProduct}/>
    </div>
  )
}
export default NewProduct;