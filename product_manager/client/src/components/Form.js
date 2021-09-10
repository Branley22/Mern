import React, {useEffect, useState} from 'react';


const Form = (props) =>{

  const {submitHandler, buttonText, product, setProduct} = props;

  const newChangeHandler = (e)=>{
    let newStateObject = {...product};
    product.name = e.target.value
    newStateObject[e.target.name] = e.target.value; 
    console.log(e.target.name, e.target.value);
    setProduct(newStateObject);
  } 

  return(
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="">title</label>
        <input onChange={newChangeHandler} name="title" type="text" value={product.title}/>
        </div>

        <div>
        <label htmlFor="">price</label>
        <input onChange={newChangeHandler} name="price" type="text" value={product.price}/>
        </div>

        <div>
        <label htmlFor="">description</label>
        <input onChange={newChangeHandler} name="description" type="text" value={product.description}/>
        </div>

        <button>{buttonText}</button>
      </form>
  )
}
export default Form;