import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Signer } from 'crypto';
import gql from '../gqlQueries';
import Item from './Item';
import { useItem } from '../state';

const StyledMenu = styled.div`
  height: 80vh;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 5px 0;
`;

const Menu = ({ addToCart }) => {
  // useEffect(() => {
  //   console.log('component did mount');
  //   gql.getItems().then(res => {
  //     // setItems(res.data.items);
  //     dispatch({
  //       type: 'addItems',
  //       newItems: res.data.items,
  //     });
  //   });
  // }, []);
  const s = useItem();

  const listItems = () => {
    return s.item.map((item, index) => {
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
