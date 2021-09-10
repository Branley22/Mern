import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import DeleteProduct from './DeleteProduct';

const AllProducts = (props)=>{

  const [productList, setProductList] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:8000/api/products')
    .then((res)=>{
      console.log(res.data);
      setProductList(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])



  return(
    <div>
      <h1 style={{fontSize:"30px", borderBottom:"5px double lightgrey"}}>
      The Product Collection
      </h1>

      <div>
        {
          productList.map((product, index)=>(
            <div key={index} style={{border:"6px double red", padding:"10", borderRadius:"10px", width: "60%", margin:"auto"}}>
              <Link to={`/products/${product._id}`}>
              <p>{product.title}</p>
              <p>{product.price}</p>
              <p>{product.description}</p>
              </Link>
              <DeleteProduct productList={productList} setProductList={setProductList} id={product._id}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}
export default AllProducts;