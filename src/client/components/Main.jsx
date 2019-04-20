import React, { useState, memo } from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import Cart from './Cart';

const Home = styled.div`
  text-align: center;
  padding: 0px 30px;
`;

const Main = () => {
  const [cart, setCart] = useState({});

  const addToCart = combo => {
    setCart(prevCart => {
      const newCart = Object.assign({}, prevCart);
      if (!newCart[combo.id]) {
        newCart[combo.id] = { id: combo.id, name: combo.name, price: combo.price, quantity: 1 };
      } else {
        newCart[combo.id].quantity += 1;
      }
      return newCart;
    });
  };

  const deleteFromCart = item => {
    setCart(prevCart => {
      const newCart = Object.assign({}, prevCart);
      if (!newCart[item.id]) {
        console.log('this should never be called');
      } else {
        newCart[item.id].quantity -= 1;
        if (newCart[item.id].quantity <= 0) {
          delete newCart[item.id];
        }
      }
      return newCart;
    });
  };

  return (
    <Home>
      <Menu addToCart={addToCart} />
      <Cart cart={cart} deleteFromCart={deleteFromCart} />
    </Home>
  );
};

export default memo(Main);
