import React, { useState, memo } from 'react';
import styled from 'styled-components';
import CustomizeModal from './CustomizeModal';
import ItemPhotoModal from './ItemPhotoModal';
import device from '../device';

const ItemDetail = styled.div`
  display: grid;
  padding: 5px 0px;
  grid-template-columns: 48% 15% 15% 15%;
  align-items: center;
  grid-gap: 5px;
  grid-auto-rows: 6em;
  border-top: 1px solid #dfdfdf;

  &:hover {
    background: #eee;
  }
  &:active {
    background: #fffff1;
  }
`;
const ItemName = styled.span`
  justify-self: center;
  margin-left: 0.5em;
  margin-right: 0.5em;

  align-self: center;

  @media ${device.tablet} {
    margin-left: 2em;
    font-size: 2em;
  }
`;
const ItemPrice = styled.span`
  background-color: #ffce00;
  border-radius: 2em;
  padding: 8px;
  margin: 0px;
  font-size: 0.8em;
  vertical-align: baseline;
  overflow: hidden;
  text-overflow: ellipsis;
  font-style: italic;
  box-shadow: 0px 1px 3px #888888;

  @media ${device.tablet} {
    margin: 5px 10px;
    font-size: 1em;
  }

  @media ${device.laptop} {
    margin: 5px 25px;
    font-size: 1em;
  }
`;

const StyledButton = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  border: 0 !important;

  color: #f4ebd9;
  background-color: #40a459;
  letter-spacing: 1.5px;
  padding: 5px 0px;
  margin: 0px 0px 0px 3px;
  border-radius: 10px;
  box-shadow: 0px 4px 5px #888888;
  overflow: hidden;
  text-overflow: ellipsis;

  @media ${device.tablet} {
    padding: 10px 0px;
    margin: 5px;
  }

  &:hover {
    background-color: #3cb359;
  }
  &:active {
    box-shadow: 0px 2px 5px #666666;
    transform: translateY(3px);
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
        <ItemPrice>${price}</ItemPrice>
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

export default memo(Item);
