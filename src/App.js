// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './Store';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App = () => (
  <Provider store={store}>
    <div>
      <ProductList />
      <Cart />
    </div>
  </Provider>
);

export default App;
