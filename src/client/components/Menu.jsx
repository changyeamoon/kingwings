import React from 'react';
import styled from 'styled-components';
import Item from './Item';
import { useItem } from '../state';

const StyledMenu = styled.div`
  height: 80vh;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 5px 0;
`;

const Menu = ({ addToCart }) => {
  const store = useItem();

  const listItems = () => {
    return store.item.map((item, index) => {
      return (
        <Item
          key={`${item.__typename}:${item.id}`}
          id={`${item.__typename}:${item.id}`}
          {...item}
          addToCart={addToCart}
        />
      );
    });
  };
  return <StyledMenu>{listItems()}</StyledMenu>;
};

export default Menu;
