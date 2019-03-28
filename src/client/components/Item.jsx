import React from 'react';
import styled from 'styled-components';

const ItemPhoto = styled.div``;
const ItemName = styled.div``;
const ItemPrice = styled.div``;

const Item = ({ name, price, photo }) => {
  return (
    <>
      <ItemName>{name}</ItemName>
      <ItemPrice>{price}</ItemPrice>
      <ItemPhoto>{photo}</ItemPhoto>
    </>
  );
};

export default Item;
