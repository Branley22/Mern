import React, {useState, useEffect} from 'react';

const Form = (props)=>{

  const {buttonText, submitHandler, author, setAuthor, errors} = props;

  const newChangeHandler = (e)=>{
    let newStateObject = {...author};
    author.name = e.target.value;
    newStateObject[e.target.name] = e.target.value;
    console.log(e.target.name, e.target.value);
    setAuthor(newStateObject);
  }

  return(
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="">Author Name:</label>
          <input onChange={newChangeHandler} name="name" type="text" value={author.name}/>
          {
            errors.name?
            <span style={{color:'red'}}>{errors.name.message}</span>
            :null
          }
        </div>
        <button>{buttonText}</button>
      </form>   
    </div>
  )
}
export default Form;