import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import gql from '../gqlQueries';
import Combo from './Combo';

const StyledMenu = styled.div``;

const Menu = ({ addToCart }) => {
  const [combos, setCombos] = useState([]);

  useEffect(() => {
    gql.getCombos().then(res => {
      setCombos(res.data.combos);
    });
  }, []);

  const listCombos = () => {
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
