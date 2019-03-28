import React from 'react';
import styled from 'styled-components';

const ComboPhoto = styled.span``;
const ComboName = styled.span``;
const ComboPrice = styled.span``;

const Combo = ({ addToCart, id, name, price, photo }) => {
  return (
    <div>
      <ComboName>{name} </ComboName>
      <ComboPrice>{price} </ComboPrice>
      <ComboPhoto>{photo}</ComboPhoto>
      <button type="button" onClick={e => addToCart({ id, name, price })}>
        Add to Cart
      </button>
    </div>
  );
};

export default Combo;
