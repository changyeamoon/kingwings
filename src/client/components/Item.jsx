import React from 'react';
import styled from 'styled-components';

const ItemDetail = styled.div`
  display: grid;
  grid-template-columns: 2fr repeat(4, 1fr);
`;
const ItemPhoto = styled.span``;
const ItemName = styled.span``;
const ItemPrice = styled.span``;

const Item = ({ addToCart, id, name, price, photo }) => {
  return (
    <ItemDetail>
      <ItemName>{name} </ItemName>
      <ItemPrice>{price} </ItemPrice>
      <ItemPhoto>Photo Button{photo}</ItemPhoto>
      <button type="button">Customize Then Add</button>
      <button type="button" onClick={() => addToCart({ id, name, price })}>
        Add to Cart
      </button>
    </ItemDetail>
  );
};

export default Item;
