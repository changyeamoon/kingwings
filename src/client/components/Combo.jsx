import React from 'react';
import styled from 'styled-components';

const ComboPhoto = styled.span``;
const ComboName = styled.span``;
const ComboPrice = styled.span``;

const Combo = ({ addToCart, name, price, photo }) => {
  return (
    <div>
      <ComboName>{name} </ComboName>
      <ComboPrice>{price} </ComboPrice>
      <ComboPhoto>{photo}</ComboPhoto>
      <button type="button" onClick={e => addToCart(e)}>
        Add to Cart
      </button>
    </div>
  );
};

export default Combo;
