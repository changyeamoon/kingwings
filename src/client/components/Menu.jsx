import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import gql from '../gqlQueries';
import Item from './Item';

const StyledMenu = styled.div`
  height: 80vh;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 5px 0;
`;

const Menu = ({ addToCart }) => {
  const [items, setItems] = useState([]);
  // const [{ items }, dispatch] = useStateValue();

  // useEffect(() => {
  //   console.log(items);

  // }, [items]);

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
  return <StyledMenu>{listItems()}</StyledMenu>;
};

export default Menu;
