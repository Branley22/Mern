import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import DeletePet from './DeletePet'


const OnePet = (props) =>{

  const [onePet, setOnePet] = useState({});


  useEffect(()=>{
    axios.get(`http://localhost:8000/api/pets/${props.id}`)
    .then((res)=>{
      console.log(res);
      console.log(res.data);
      setOnePet(res.data);
    })
    .catch((err)=>console.log(err))
  },[])



  return(
    <div>
      <div className="adoptbtn-container">
        <p style={{fontSize:"30px"}}>Details about: {onePet.name}</p>
        <DeletePet id={onePet._id}/>
      </div>
      <div className="detail-container">
      <p>Pet type: <span style={{paddingLeft:"60px"}}>{onePet.type}</span></p>
      <p>Description: <span style={{paddingLeft:"30px"}}>{onePet.description}</span></p>
      <p>Skills:
      <span style={{paddingLeft:"90px"}}>{onePet.skill1}</span><br/>
      <span style={{paddingLeft:"138px"}}>{onePet.skill2}</span><br/>
      <span style={{paddingLeft:"138px"}}>{onePet.skill3}</span><br/>
      </p>
      </div>
    </div>
  )
}
export default OnePet;