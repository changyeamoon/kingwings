import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import gql from '../gqlQueries';
import Combo from './Combo';

const StyledMenu = styled.div``;

const Menu = ({ setCart }) => {
  const [combos, setCombos] = useState([]);

  useEffect(() => {
    gql.getCombos().then(res => {
      setCombos(res.data.combos);
    });
  }, []);

  const addToCart = e => {
    setCart(cart => {
      cart[e.target.value] = 1;
      return cart;
    });
  };

  const listCombos = () => {
    console.log('inside list combos which should act like component did mount');
    return combos.map((combo, index) => {
      return <Combo key={`${combo.__typename}:${combo.id}`} {...combo} addToCart={addToCart} />;
    });
  };
  return <StyledMenu>{listCombos()}</StyledMenu>;
};

export default Menu;
