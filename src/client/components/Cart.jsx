import React, { useState, useEffect } from 'react';
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

const ItemName = styled.span``;
const ItemPrice = styled.span``;
const ItemQuantity = styled.span``;

const Cart = ({ cart, deleteFromCart }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const sum = Object.values(cart).reduce((accum, curr) => {
      return accum + curr.price * curr.quantity;
    }, 0);
    setTotalPrice(sum.toFixed(2));
  }, [cart]);

  const ListCart = () => {
    return Object.values(cart).map(item => (
      <div key={item.id}>
        <ItemName>{item.name}</ItemName>
        <ItemPrice>{item.price}</ItemPrice>
        <ItemQuantity>{item.quantity}</ItemQuantity>
        <button type="button" onClick={() => deleteFromCart(item)}>
          DELETE
        </button>
      </div>
    ));
  };

  return (
    <CartStore>
      <span>CART</span>
      <CartContent>{ListCart()}</CartContent>
      <div>TOTAL: {totalPrice}</div>
    </CartStore>
  );
};

export default Cart;
