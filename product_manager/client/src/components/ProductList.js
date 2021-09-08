import React, {useEffect, useState} from 'react';
import axios from 'axios';



const ProductList = (props) => {
  const [productItems, setProductItems] = useState([]);
  useEffect(()=> {
    axios.get("http://localhost:8000/api/products")
    .then(res=>setProductItems(res.data));
  },[])
  return (
    <div>
      {props.productItems.map((product, idx) => {
        return (
           <p key={idx}>{product.title}, {product.price}, {product.description}</p>
        )
      })}
    </div>
  )
}
export default ProductList;
