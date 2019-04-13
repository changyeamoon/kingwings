import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CartStore = styled.div`
  position: absolute;
  bottom: 1%;
  width: 100%;
  left: 50%;
  margin-left: -50%;
  text-align: center;
`;

const CartButton = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  border: 0 !important;
  padding: 0px;
  background-color: blue;
  width: 100%;
  height: 2em;

  &:focus {
    outline: 0;
  }
`;

const CartContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  height: 70vh;
  width: 60vw
  bottom: 30px;
  right: 0.5em;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  overflow: scroll;
  z-index: 3
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

const Test = styled.div`
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const Cart = ({ cart, deleteFromCart }) => {
  const [subTotal, setSubTotal] = useState(0);
  useEffect(() => {
    const sum = Object.values(cart).reduce((accum, curr) => {
      return accum + curr.price * curr.quantity;
    }, 0);
    setSubTotal(sum.toFixed(2));
  }, [cart]);

  const [display, setDisplay] = useState({});
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
            setDisplay('block');
            setToggle('^');
          }
          if (toggle === '^') {
            setDisplay('none');
            setToggle('v');
          }
        }}
      >
        SUB TOTAL({subTotal}) + TAX({tax}) = {(parseFloat(subTotal) + parseFloat(tax)).toFixed(2)} -
        {toggle}-
      </CartButton>
      <Test
        style={{ display }}
        onClick={() => {
          setDisplay('none');
          setToggle('v');
        }}
      />
      <CartContent style={{ display }}>
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
