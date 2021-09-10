import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link,navigate} from '@reach/router';
import DeleteCartoon from './DeleteCartoon';

const AllCartoons = (props) => {

  const [cartoonList, setCartoonList] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:8000/api/cartoons')
    .then((res)=>{
      console.log(res.data);
      setCartoonList(res.data)
    })
      .catch((err)=>{
        console.log(err);
      })
  },[])


  return (
    <div>
      <h1 style={{fontSize:"30px", borderBottom: "5px double lightgray"}}>
        The Cartoon Collection
      </h1>

        <div>
          {
            cartoonList.map((cartoon, index)=> (
              <div key={index} style={{border: "6px double red", borderRadius:"110px"}}>
                <Link to={`/cartoon/${cartoon._id}`}>
                <p>{cartoon.name}</p>
                <img src={cartoon.image} alt="cartoon image" style={{width:"200px", height:"190px"}} />
                </Link>
                <DeleteCartoon cartoonList={cartoonList} setCartoonList={setCartoonList} id={cartoon._id}/>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default AllCartoons;