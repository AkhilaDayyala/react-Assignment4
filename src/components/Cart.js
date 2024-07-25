// src/components/Cart.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../Actions';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalAmount = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div>
      <h2 style={{marginLeft:'300px', color:'tomato'}}>Cart</h2>
      <div className='container'>
      <div className='row'><div className='col-lg-6'>
      <div className="card" style={{width:'500px'}}>
        {cart.map((product) => (
          <div className="card-body" key={product.id}>{product.image}
            {product.name} - ${product.price} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="btn btn-primary" onClick={() => dispatch(removeFromCart(product.id))}>Remove</button>
          </div>
        ))}
      </div></div></div></div>
      <h3 style={{marginLeft:'300px', color:'tomato'}}>Total Amount: ${totalAmount}</h3>
    </div>
  );
};

export default Cart;
