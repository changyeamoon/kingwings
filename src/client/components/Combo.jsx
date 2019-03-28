import React from 'react';
import styled from 'styled-components';

const ItemDetail = styled.div`
  display: grid;
  grid-template-columns: 2fr repeat(4, 1fr);
`;
const ComboPhoto = styled.span``;
const ComboName = styled.span``;
const ComboPrice = styled.span``;

const Combo = ({ addToCart, id, name, price, photo }) => {
  return (
    <ItemDetail>
      <ComboName>{name} </ComboName>
      <ComboPrice>{price} </ComboPrice>
      <ComboPhoto>Photo Button{photo}</ComboPhoto>
      <button type="button">Customize Then Add</button>
      <button type="button" onClick={() => addToCart({ id, name, price })}>
        Add to Cart
      </button>
    </ItemDetail>
  );
};

export default Combo;
