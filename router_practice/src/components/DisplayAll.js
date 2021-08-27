import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';


const DisplayAll = (props) => {

  const {countryList, setCountryList} = props;
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const ratingHandler = (e, country) => {
     country.rating = e.target.valueAsNumber;
     setRating(e.target.valueAsNumber);
     setCountryList([...countryList, country]);
  }

  const reviewHandler = (e, country) => {
    country.review = e.target.value;
    setReview(e.target.value);
    setCountryList([...countryList, country]);
  }

  const propsHandler = (country) => {
     if(country.rating && country.review) {
       console.log("if");
       return (
        // <DisplayOne path="/country/:countryCode/:rating/:review"/>
         <Link to={`/country/${country.alpha2Code}/${country.rating}/${country.review}`}><p>{country.name}</p></Link>
       )
     }
     else if(country.rating) {
       console.log("elseif");
       return (
        // <DisplayOne path="/country/:countryCode/:rating"/>
         <Link to={`/country/${country.alpha2Code}/${country.rating}`}><p>{country.name}</p></Link>
       )
     }
     else {
       console.log("else");
       return (
         <Link to={`/country/${country.alpha2Code}`}><p>{country.name}</p></Link>
       )
     }
  } 


  return (
    <div style={{display:"flex", flexWrap: "wrap"}}>

      {
        countryList.map((country, index)=>(
          <div key={index} style={{margin:"15px", padding:"41px", border:"2px double blue"}}>

            {
              propsHandler(country)
            }

            <label htmlFor="rating">Please leave a rating:</label>
            <input type="number" onChange={(e)=>ratingHandler(e, country)}/>
            <br/>

            {
              country.rating?
              <div>
                <label htmlFor="review">Please leave a review(Optional):</label>
                <textarea type="text" onChange={(e)=>reviewHandler(e,country)}/>
              </div>

              :null
            }
            <p>{country.alpha2Code}</p>
            <p>{country.population}</p>
            <img style={{width:"60px"}} src={country.flag} alt="Country flag"></img>
          </div>
        ))
      }
    </div>
  )
}

export default DisplayAll;