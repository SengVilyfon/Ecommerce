import React from 'react'
import { useState } from 'react';
import Check from './pages/Check';
import Home from './pages/Home';
import About from './pages/About';

import Blog from './pages/Blog';
import Cart from './pages/Cart';
import Singlep from './pages/Singlep';
import Shop from './pages/Shop';
import Single from './pages/Single';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return; // Prevent setting quantity to 0 or negative
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity: parseInt(quantity) } : item
    ));
  };
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home addToCart={addToCart}/>}/>
      <Route path="/Shop" element={<Shop addToCart={addToCart} />}/>
      <Route path="/cart" element={
          <Cart
            cartItems={cart}
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
          />
        } />
      <Route path="/About" element={<About />}/>
      <Route path="/Check" element={<Check  />}/>
      
      <Route path="/Blog" element={<Blog  />}/>
      <Route path="/Singlep" element={<Singlep />}/>
      <Route path="/Single" element={<Single />}/>
      <Route path="*" element={<Navigate to="/"/>}/>  
    </Routes>
    </BrowserRouter>  
  )
}
export default App;
