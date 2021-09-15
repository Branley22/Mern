import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import DeletePet from './DeletePet';


const AllPets = (props) =>{

  const [petList, setPetList] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:8000/api/pets')
    .then((res)=>{
      console.log(res.data);
      setPetList(res.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])



  return(
    <div>
      <h3 
      style={{marginTop:"10px", marginBottom:"20px", paddingLeft:"20px", fontSize:"25px"}}>
      These pets are looking for a good home</h3>
      <div className="allpet-container">
        <table>
          <thead>
            <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Actions</th>
            </tr>
          </thead>
        </table>

        {
          petList.map((pet, index)=>(
            <div key={index}>
              <table>
                <thead>
                <tr>
                  <td>{pet.name}</td>
                  <td>{pet.type}</td>
                  <td>
                  <Link to={`/pets/${pet._id}`}>
                    details
                  </Link> | 
                  <Link to={`/pets/edit/${pet._id}`}>
                    edit
                  </Link>
                </td>
                </tr>
              </thead>
              </table>
            </div>
          ))
        }
      </div>
    </div>
  )
}
export default AllPets;

{/* <div>
<h3 style={{marginTop:"10px", marginBottom:"20px", paddingLeft:"20px"}}>These pets are looking for a good home</h3>
<div className="allpet-container">
  <table className="table">
    <thead>
      <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Actions</th>
      </tr>
    </thead>
  </table>
  {
    petList.map((pet, index)=>(
      <div key={index}>
        <table className="table">
          <thead>
          <tr>
            <td>{pet.name}</td>
            <td style={{paddingLeft:"40px"}}>{pet.type}</td>
            <td>
            <Link to={`/pets/${pet._id}`}>
              details
            </Link>|
            <Link to={`/pets/edit/${pet._id}`}>
              edit
            </Link>
          </td>
          </tr>
        </thead>
        </table>
      </div>
    ))
  }
</div>
</div> */}