import React from 'react';
import styled from 'styled-components';

const ComboPhoto = styled.div``;
const ComboName = styled.div``;
const ComboPrice = styled.div``;

const Combo = ({ name, price, photo }) => {
  return (
    <>
      <ComboName>{name}</ComboName>
      <ComboPrice>{price}</ComboPrice>
      <ComboPhoto>{photo}</ComboPhoto>
    </>
  );
};

export default Combo;
