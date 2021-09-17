import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import DeleteAuthor from './DeleteAuthor';

const AllAuthors = (props)=>{

  const [authorList, setAuthorList] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:8000/api/authors')
    .then((res)=>{
      console.log(res.data);
      setAuthorList(res.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])

  return(
    <div>
      <h1>
        Favorite Authors
      </h1>
      {
        authorList.map((author,index)=>(
          <div className="listItem "key={index}>
            <Link to={`/authors/${author._id}`}>
              <p>{author.name}</p>
            </Link>
            <Link to={`/authors/edit/${author._id}`}>
              Edit 
            </Link>
            <DeleteAuthor 
            authorList = {authorList}
            setAuthorList = {setAuthorList}
            id={author._id}
            />
          </div>
        ))
      }
    </div>
  )
}
export default AllAuthors;