import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import DeleteAuthor from './DeleteAuthor';
import Header from '../component/Header';

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
      {/* <Header 
      headerText='add new author'
      headerPath={`/authors/new/`}/> */}
      <h1>Favorite Authors</h1>
      <p style={{color:"purple"}}>We have quotes by:</p>
      <table>
        <thead>
          <tr>
            <th>Author</th>
            <th>Actions avaiable</th>
          </tr>
        </thead>
      </table>
      {
        
        authorList.map((author,index)=>(
          <div className="listItem"key={index}>
            <table>
              <thead>
                <tr>
                  <td>{author.name}</td>
                  <td>
                  <DeleteAuthor 
                  authorList = {authorList}
                  setAuthorList = {setAuthorList}
                  id={author._id}
                  /> |
                  <Link to={`/authors/edit/${author._id}`}>
                    Edit 
                  </Link>
                  </td>
                </tr>
              </thead>
            </table>
          </div>
        ))
      }
    </div>
  )
}
export default AllAuthors;