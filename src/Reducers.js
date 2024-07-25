// src/reducers.js
import { combineReducers } from 'redux';
import { ADD_TO_CART, REMOVE_FROM_CART, LIST_PRODUCTS } from './Actions';

const initialState = {
  products: [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
  ],
  cart: [],
};

const productReducer = (state = initialState.products, action) => {
  switch (action.type) {
    case LIST_PRODUCTS:
      return state;
    default:
      return state;
  }
};

const cartReducer = (state = initialState.cart, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
});

export default rootReducer;
