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

  const addToCart = combo => {
    setCart(cart => {
      if (!cart[combo.id]) {
        cart[combo.id] = { name: combo.name, price: combo.price, quantity: 1 };
      } else {
        cart[combo.id].quantity += 1;
      }
      console.log(cart);
      return Object.assign({}, cart);
    });
  };

  const listCombos = () => {
    console.log('inside list combos which should act like component did mount');
    return combos.map((combo, index) => {
      return (
        <Combo
          key={`${combo.__typename}:${combo.id}`}
          id={`${combo.__typename}:${combo.id}`}
          {...combo}
          addToCart={addToCart}
        />
      );
    });
  };

  return <StyledMenu>{listCombos()}</StyledMenu>;
};

export default Menu;
