// src/components/ProductList.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Actions';
import Products from '../Products';

const ProductList = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <div>
      
      <h2 style={{marginLeft:'140px', color:'tomato'}}>Products</h2>
      <div>
        <div className='container'>
          <div className='card' style={{width:'150px'}}>
        {products.map((product) => (
         
            <div key={product.id}>{product.image}<br></br><br></br>
            {product.name} - ${product.price}<br></br>
            <button className="btn btn-primary" onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
          </div>
          // </Products>
        
          
          
        ))}
      </div>
      </div></div>
    </div>
  );
};

export default ProductList;
