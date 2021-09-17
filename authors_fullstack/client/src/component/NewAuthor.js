import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';

const NewAuthor = (props)=>{

  const [NewAuthor, setNewAuthor] = useState({
    name:""
  })

  const newChangeHandler = (e)=>{
    let newStateObject = {...NewAuthor};
    NewAuthor.name = e.target.value;
    newStateObject[e.target.name] = e.target.value;
    console.log(e.target.name, e.target.value);
    setNewAuthor(newStateObject);
  }

  const newSubmitHandler = (e)=>{
    e.preventDefault();
    axios.post('http://localhost:8000/api/authors',
    NewAuthor
    )
    .then((res)=>{
      console.log(res.data);
      navigate('/authors');
    })
  }

  return(
    <div>
      <form onSubmit={newSubmitHandler}>
        <div>
          <label htmlFor="">Author Name:</label>
          <input onChange={newChangeHandler} name="name" type="text" value={NewAuthor.name}/>
        </div>
        <button>Add author</button>
      </form>
    </div>
  )
}
export default NewAuthor;