import React, { useState } from 'react';
import styled from 'styled-components';
import CustomizeModal from './CustomizeModal';
import ItemPhotoModal from './ItemPhotoModal';

const ItemDetail = styled.div`
  display: grid;
  padding: 5px 0px;
  grid-template-columns: 60% 10% 12% 12%;
  align-items: center;
  grid-gap: 5px;
  grid-auto-rows: 10em;

  &:hover {
    background: #eee;
  }
`;
const ItemName = styled.span`
  justify-self: left;
  align-self: center;
`;
const ItemPrice = styled.span`
  place-self: center;
  text-align: center
  background-color: #ffce00;
  border-radius: 20px;
  height: 2em;
  width: 2em;
  padding: 5px;
  margin: 5px;
  font-size: 1em;
  vertical-align: baseline;
`;

const StyledButton = styled.span`
  -webkit-appearance: none;
  -moz-appearance: none;
  border: 0 !important;

  color: #f4ebd9;
  background-color: #40a459;
  letter-spacing: 2px;
  padding: 10px;
  margin: 5px;
  border-radius: 10px;
  box-shadow: 0px 6px 5px #888888;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    background-color: #3d9ae3;
  }
  &:active {
    box-shadow: 0px 2px 5px #666666;
    transform: translateY(4px);
  }
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
