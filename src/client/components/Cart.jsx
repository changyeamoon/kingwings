import React from 'react';
import styled from 'styled-components';

const CartContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-height: 50px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
`;

const CartStore = styled.div`
  bottom: 33%;
  right: 0.5em;

  &:hover ${CartContent} {
    display: grid;
  }
`;

const Cart = ({ cart }) => {
  return (
    <CartStore>
      <span>CART</span>
      <CartContent>
        {Object.values(cart).map(item => (
          <div>
            {item.name} {item.price} {item.quantity}
          </div>
        ))}
      </CartContent>
    </CartStore>
  );
};

export default Cart;
