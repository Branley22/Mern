import React, {useEffect, useState} from 'react';

const Form = (props) =>{

  const {submitHandler, buttonText, pet, setPet, errors} = props;

  const newChangeHandler = (e) =>{
    let newStateObject = {...pet};
    pet.name = e.target.value
    newStateObject[e.target.name] = e.target.value;
    console.log(e.target.name, e.target.value);
    setPet(newStateObject);
  }


  return(
      <form onSubmit={submitHandler}>
        <div className="new-pet-container">
          <div className="new-pet-section1">
        <div>
          <label htmlFor=""> Pet Name:</label>
          <input onChange={newChangeHandler} name="name" type="text" value={pet.name}/>
          {
            errors.name ?
            <span style={{color: "red"}}>{errors.name.message}</span>
            :null
          }
        </div>

        <div>
          <label htmlFor="">Pet Type:</label>
          <input onChange={newChangeHandler} name="type" type="text" value={pet.type}/>
          {
            errors.type ?
            <span style={{color: "red"}}>{errors.type.message}</span>
            :null
          }
        </div>

        <div>
          <label htmlFor="">Pet Description:</label>
          <input onChange={newChangeHandler} name="description" type="text" value={pet.description}/>
          {
            errors.description ?
            <span style={{color: "red"}}>{errors.description.message}</span>
            :null
          }
        </div>
        </div>
        
        <div className="new-pet-section2">
        <div>
          <p style={{fontSize:"30px", marginBottom:"20px"}}>Skills (optional):</p>
        </div>

        <div>
          <label htmlFor="">Skill 1:</label>
          <input onChange={newChangeHandler} name="skill1" type="text" value={pet.skill1}/>
          {
            errors.skill1 ?
            <span style={{color: "red"}}>{errors.skill1.message}</span>
            :null
          }
        </div>

        <div>
          <label htmlFor="">Skill 2:</label>
          <input onChange={newChangeHandler} name="skill2" type="text" value={pet.skill2}/>
          {
            errors.skill2 ?
            <span style={{color: "red"}}>{errors.skill2.message}</span>
            :null
          }
        </div>

        <div>
          <label htmlFor="">Skill 3:</label>
          <input onChange={newChangeHandler} name="skill3" type="text" value={pet.skill3}/>
          {
            errors.skill3 ?
            <span style={{color: "red"}}>{errors.skill3.message}</span>
            :null
          }
        </div>
        </div>
        </div>
        <button className="add-petbtn">{buttonText}</button>
      </form>
  )
}
export default Form;