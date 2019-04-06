import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import gql from '../gqlQueries';
import Item from './Item';

const StyledMenu = styled.div`
  height: 80vh;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const Menu = ({ addToCart, hello }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    gql.getItems().then(res => {
      setItems(res.data.items);
    });
  }, []);

  const listItems = () => {
    return items.map((item, index) => {
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
  return (
    <StyledMenu>
      {listItems()}
      {hello}
    </StyledMenu>
  );
};

export default Menu;
