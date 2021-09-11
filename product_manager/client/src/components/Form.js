import React, {useEffect, useState} from 'react';


const Form = (props) =>{

  const {submitHandler, buttonText, product, setProduct, errors} = props;

  const newChangeHandler = (e)=>{
    let newStateObject = {...product};
    product.name = e.target.value
    newStateObject[e.target.name] = e.target.value; 
    console.log(e.target.name, e.target.value);
    setProduct(newStateObject);
  } 

  return(
    /// will equal editProductHandler or newSubmitHandler
    //depending on which component is rendering and sending it down

    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="">title</label>
        <input onChange={newChangeHandler} name="title" type="text" value={product.title}/>

        {
          errors.title?
          <span style={{color:"red"}}>{errors.title.message}</span>
          :null
        }
        </div>

        <div>
        <label htmlFor="">price</label>
        <input onChange={newChangeHandler} name="price" type="text" value={product.price}/>

        {
          errors.price?
          <span style={{color:"red"}}>{errors.price.message}</span>
          :null
        }
        </div>

        <div>
        <label htmlFor="">description</label>
        <input onChange={newChangeHandler} name="description" type="text" value={product.description}/>

        {
          errors.description?
          <span style={{color:"red"}}>{errors.description.message}</span>
          :null
        }
        </div>

        <button>{buttonText}</button>
      </form>
  )
}
export default Form;