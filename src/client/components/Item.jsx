import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CustomizeModal from './CustomizeModal';

const ItemDetail = styled.div`
  display: grid;
  padding: 5px 0px;
  grid-template-columns: 65% 10% 5% 10% 10%
  align-self: center;

  &:hover {
    background: #eee;
  }
`;
const ItemName = styled.span`
  justify-self: left;
`;
const ItemPhoto = styled.span``;
const ItemPrice = styled.span``;

const StyledButton = styled.span``;

const Item = ({ addToCart, id, name, price, photo }) => {
  const [display, setDisplay] = useState('none');

  return (
    <>
      <ItemDetail>
        <ItemName>{name} </ItemName>
        <ItemPrice>${price} </ItemPrice>
        <ItemPhoto>{photo}</ItemPhoto>
        <StyledButton type="button" onClick={() => setDisplay('block')}>
          edit
        </StyledButton>
        <StyledButton type="button" onClick={() => addToCart({ id, name, price })}>
          cart
        </StyledButton>
      </ItemDetail>
      <CustomizeModal display={display} setDisplay={setDisplay} />
    </>
  );
};

export default Item;
