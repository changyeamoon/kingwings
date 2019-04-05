import React, { useState } from 'react';
import styled from 'styled-components';
import CustomizeModal from './CustomizeModal';
import ItemPhotoModal from './ItemPhotoModal';

const ItemDetail = styled.div`
  display: grid;
  padding: 5px 0px;
  grid-template-columns: 60% 10% 12% 12%;
  align-self: center;
  grid-gap: 5px;

  &:hover {
    background: #eee;
  }
`;
const ItemName = styled.span`
  justify-self: left;
`;
const ItemPrice = styled.span``;

const StyledButton = styled.span`
  -webkit-appearance: none;
  -moz-appearance: none;
  border: 0 !important;

  &:focus {
    outline: 0;
  }
`;

const Item = ({ addToCart, id, name, price, photo }) => {
  const [photoDisplay, setPhotoDisplay] = useState('none');
  const [customizeDisplay, setCustomizeDisplay] = useState('none');

  return (
    <>
      <ItemDetail>
        <ItemName onClick={() => setPhotoDisplay('block')}>{name} </ItemName>
        <ItemPrice>${price} </ItemPrice>
        <StyledButton type="button" onClick={() => setCustomizeDisplay('block')}>
          edit
        </StyledButton>
        <StyledButton type="button" onClick={() => addToCart({ id, name, price })}>
          cart
        </StyledButton>
      </ItemDetail>
      <ItemPhotoModal display={photoDisplay} setDisplay={setPhotoDisplay} photo={photo} />
      <CustomizeModal display={customizeDisplay} setDisplay={setCustomizeDisplay} />
    </>
  );
};

export default Item;
