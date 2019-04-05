import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CartContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  height: 80vh;
  width: 60vw
  bottom: 30px;
  right: 0.5em;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  overflow: scroll;
`;

const CartStore = styled.div`
  position: absolute;
  bottom: 1%;
  right: 2em;
`;
const ItemDetails = styled.div`
  display: grid;
  padding: 3px 0px;
  grid-template-columns: 60% 10% 12% 12%;
  align-self: center;
  justify-self: center;
  grid-gap: 5px;

  &:hover {
    background: #eee;
  }
`;
const ItemName = styled.span`
  justify-self: left;
`;
const ItemPrice = styled.span``;
const ItemQuantity = styled.span``;

const DeleteButton = styled.span`
  -webkit-appearance: none;
  -moz-appearance: none;
  border: 0 !important;

  &:focus {
    outline: 0;
  }
`;

const CartButton = styled.button`
  position: relative;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: 0 !important;
  width: 80vw;
  padding: 0;

  &:focus {
    outline: 0;
  }
`;

const Cart = ({ cart, deleteFromCart }) => {
  const [subTotal, setSubTotal] = useState(0);
  useEffect(() => {
    const sum = Object.values(cart).reduce((accum, curr) => {
      return accum + curr.price * curr.quantity;
    }, 0);
    setSubTotal(sum.toFixed(2));
  }, [cart]);

  const [cartStyle, setCartStyle] = useState({});
  const [toggle, setToggle] = useState('v');
  const ListCart = () => {
    return Object.values(cart).map(item => (
      <ItemDetails key={item.id}>
        <ItemName>{item.name}</ItemName>
        <ItemPrice>{item.price}</ItemPrice>
        <ItemQuantity>{item.quantity}</ItemQuantity>
        <DeleteButton type="button" onClick={() => deleteFromCart(item)}>
          ❌
        </DeleteButton>
      </ItemDetails>
    ));
  };
  const tax = (subTotal * 0.0775).toFixed(2);
  return (
    <CartStore>
      <CartButton
        type="button"
        onClick={() => {
          if (toggle === 'v') {
            setCartStyle(prevCartStyle => {
              return Object.assign({ ...prevCartStyle }, { display: 'block' });
            });
            setToggle('^');
          }
          if (toggle === '^') {
            setCartStyle(prevCartStyle => {
              return Object.assign({ ...prevCartStyle }, { display: 'none' });
            });
            setToggle('v');
          }
        }}
      >
        SUB TOTAL({subTotal}) + TAX({tax}) = {(parseFloat(subTotal) + parseFloat(tax)).toFixed(2)} -
        {toggle}-
      </CartButton>
      <CartContent style={cartStyle}>
        {/* <button
          type="button"
          style={{ float: 'bottom', height: '20px' }}
          onClick={() =>
            setCartStyle(prevCartStyle =>
              Object.assign({ ...prevCartStyle }, { minHeight: '100vh' }),
            )
          }
        >
          BIGG
        </button> */}
        {ListCart()}
      </CartContent>
    </CartStore>
  );
};

export default Cart;
