import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import Cart from './Cart';

const Home = styled.div`
  text-align: center;
  color: #313b72;
`;

const Main = () => {
  const [cart, setCart] = useState({});

  return (
    <Home>
      <Cart cart={cart} setCart={setCart} />
      <div>Hello from main</div>

      <Menu setCart={setCart} />
    </Home>
  );
};

export default Main;
