import React, {useState, useEffect} from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';

const Form = (props)=>{

  const {submitHandler, pirate, setPirate, errors} = props;

  const inputHandler = (e)=>{
    let newStateObject = {...pirate};
    newStateObject[e.target.name] = e.target.value;
    console.log(e.target.name, e.target.value);
    setPirate(newStateObject);
  }

  return(
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>Pirate Name:</label>
          <input onChange={inputHandler} name="name" value={pirate.name} name='name' type="text"/>
          {
            errors.name?
            <span style={{color:'red'}}>{errors.name.message}</span>
            :null
          }
        </div>
        <div>
          <label>Pirate Age:</label>
          <input onChange={inputHandler} name="age" value={pirate.age} name='age' type="number"/>
          {
            errors.age?
            <span style={{color:'red'}}>{errors.age.message}</span>
            :null
          }
        </div>
        <input type='submit'/>
      </form>
    </div>
  )
}

export default Form;
