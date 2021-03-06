import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = () => {
  const [productItems, setProductItems] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(()=> {
    axios.get("http://localhost:8000/api/products")
    .then(res=> {
      setProductItems(res.data);
      setLoaded(true);
    })
  },[])


  
  return (
    <div>
      <ProductForm/>
      <hr/>
      { loaded && <ProductList productItems={productItems}/>}
    </div>
  )
}

export default Main;