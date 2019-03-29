import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CartContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  max-height: 20vh;
  width: 22vw
  bottom: 30px;
  right: 0.5em;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  overflow: scroll;
`;

const CartStore = styled.div`
  position: absolute;
  bottom: 1%;
  right: 0.5em;
`;

const ItemName = styled.span``;
const ItemPrice = styled.span``;
const ItemQuantity = styled.span``;

const Cart = ({ cart, deleteFromCart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartStyle, setCartStyle] = useState({});

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
      <button
        type="button"
        onClick={() => {
          setCartStyle(prevCartStyle => {
            return Object.assign({ ...prevCartStyle }, { display: 'grid' });
          });
        }}
      >
        SUB TOTAL + TAX(7.75%) = TOTAL: {totalPrice}
      </button>
      <CartContent style={cartStyle}>
        <button
          type="button"
          onClick={() =>
            setCartStyle(prevCartStyle =>
              Object.assign({ ...prevCartStyle }, { minHeight: '100vh' }),
            )
          }
        >
          BIGG
        </button>
        {ListCart()}
      </CartContent>
    </CartStore>
  );
};

export default Cart;
