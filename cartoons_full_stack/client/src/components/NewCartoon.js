import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';

const NewCartoon = (props) => {

  const [NewCartoon, setNewCartoon] = useState({
    //set up state ahead of time(optional) beacuse helps prevent bugs and get rid of uncontrolled input error
    name:"",
    era:"",
    image:"",
    //empty strings dont show up in db
    genre:"",
    rating:"",
    suitableForKids:""
  })

  const newChangeHandler = (e) => {
    let newStateObject = {...NewCartoon};
    if(e.target.type === "checkbox"){
      console.log(e.target.name, e.target.value);
      newStateObject[e.target.name] = e.target.checked;
    }

    else{
      console.log(e.target.name, e.target.value);
      newStateObject[e.target.name] = e.target.value;
    }
    console.log(e.target);
    setNewCartoon(newStateObject);
  }


  const newSubmitHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/cartoons",
    //request's body that the back-end is asking for (controller)
    NewCartoon
    )
    .then((res)=>{
      console.log(res);
      console.log(res.data);
      navigate("/cartoon")
    })
    .catch((err)=>{
      console.log(err);
    })
  }



  return (
    <div>
      <form onSubmit={newSubmitHandler}>
        <div>
          <label htmlFor="">Name</label>
          <input onChange={newChangeHandler} name="name" type="text" value={NewCartoon.name}/>
        </div>

        <div>
          <label htmlFor="era">era</label>
          <select onChange={newChangeHandler} name="era" value={NewCartoon.era}>
            <option value="none" defaultValue hidden>
              Select an Era
            </option>
            <option value="1960">1960</option>
            <option value="1970">1970</option>
            <option value="1980">1980</option>
            <option value="1990">1990</option>
            <option value="2000">2000</option>
            <option value="2010">2010</option>
          </select>
        </div>

        <div>
          <label htmlFor="genre">genre</label>
          <select onChange={newChangeHandler} name="genre" value={NewCartoon.genre}>
            <option value="none" defaultValue hidden>
              Select an Genre
            </option>
            <option value="Anime">Anime</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
            <option value="Action">Action</option>
            <option value="Children">Children</option>
          </select>
        </div>

        <div>
          <label htmlFor="image">Image URL:</label>
          <input onChange={newChangeHandler} name="image" type="text" value={NewCartoon.image}/>
        </div>

        <div>
          <label htmlFor="rating">rating</label>
          <input onChange={newChangeHandler} name="rating" type="number" value={NewCartoon.rating}/>
        </div>

        <div>
          <label htmlFor="suitableForKids">Kid Friendly:</label>
          <input  onChange={newChangeHandler} name="suitableForKids" type="checkbox" checked={NewCartoon.suitableForKids}/>
        </div>

        <button>Add New Cartoon</button>
      </form>
    </div>
  )
}

export default NewCartoon;