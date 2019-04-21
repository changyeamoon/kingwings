import React, { memo } from 'react';
import styled from 'styled-components';
import Item from './Item';
import { useItem } from '../state';
import device from '../device';

const StyledMenu = styled.div`
  height: 80vh;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 5px 0;

  @media ${device.laptopL} {
    height: 70vh;
  }
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

export default memo(Menu);
