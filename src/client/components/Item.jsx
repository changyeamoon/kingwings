import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CustomizeModal from './CustomizeModal';

const ItemDetail = styled.div`
  display: grid;
  grid-template-columns: 2fr repeat(4, 1fr);
`;
const ItemName = styled.span``;
const ItemPhoto = styled.span``;
const ItemPrice = styled.span``;

const Item = ({ addToCart, id, name, price, photo }) => {
  const [display, setDisplay] = useState('none');

  return (
    <>
      <ItemDetail>
        <ItemName>{name} </ItemName>
        <ItemPrice>${price} </ItemPrice>
        <ItemPhoto>Photo Button{photo}</ItemPhoto>
        <button type="button" onClick={() => setDisplay('block')}>
          Customize Then Add
        </button>
        <button type="button" onClick={() => addToCart({ id, name, price })}>
          Add to Cart
        </button>
      </ItemDetail>
      <CustomizeModal display={display} setDisplay={setDisplay} />
    </>
  );
};

export default Item;
