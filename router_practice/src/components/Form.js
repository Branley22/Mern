import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from '@reach/router'; 

const Form = (props) => {
  
  const {countryList, setCountryList} = props;

  // set to sting, all I need back is the value 
  const [regionSelector, setRegionSelector] = useState("");

  const sumbitHandler = (e) => {
    e.preventDefault();

    axios.get(`https://restcountries.eu/rest/v2/region/${regionSelector}`)
      .then((res)=> {
        console.log(res);
        console.log(res.data);
        setCountryList(res.data);
      })
      .catch((err)=>console.log(err))
  }
  
  return (
    <div>
      <form onSubmit={sumbitHandler}>
        <label htmlFor="regionSelector">Couhntry Region</label>
        <select onChange={(e)=>setRegionSelector(e.target.value)} name="regionSelector">
          <option value="none" selected hidden>Select an Option</option>
          <option value="Africa" name="regionSelector">Africa</option>
          <option value="Americas" name="regionSelector">Americas</option>
          <option value="Asia" name="regionSelector">Asia</option>
          <option value="Europe" name="regionSelector">Europe</option>
          <option value="Oceania" name="regionSelector">Oceania</option>
        </select>
        <button>Show Countries</button>
      </form>
    </div>
  )
}

export default Form;