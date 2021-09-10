import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';

const NewProduct = (props)=>{

  const [NewProduct, setNewProduct] = useState({
    title:"",
    price:"",
    description:""
  })


  const newChangeHandler = (e)=>{
    let newStateObject = {...NewProduct};
    NewProduct.name = e.target.value
    newStateObject[e.target.name] = e.target.value; 
    setNewProduct(newStateObject);
    console.log(e.target.name, e.target.value);
  } 

  const newSubmitHandler = (e) =>{
    e.preventDefault();
    axios.post('http://localhost:8000/api/products',
    //request's body that the backend is asking for (controller)
    NewProduct
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
      <form onSubmit={newSubmitHandler}>
      <div>
        <label htmlFor="">title</label>
        <input onChange={newChangeHandler} name="title" type="text" value={NewProduct.title}/>
        </div>

        <div>
        <label htmlFor="">price</label>
        <input onChange={newChangeHandler} name="price" type="text" value={NewProduct.price}/>
        </div>

        <div>
        <label htmlFor="">description</label>
        <input onChange={newChangeHandler} name="description" type="text" value={NewProduct.description}/>
        </div>

        <button>Add New Product</button>
      </form>
    </div>
  )
}
export default NewProduct;