import React, { useState, createContext, useContext, useReducer } from 'react';

export const ItemContext = createContext([]);

export const ItemProvider = props => {
  const [item, setItem] = useState([]);
  return <ItemContext.Provider item={item}>{props.children}</ItemContext.Provider>;
};

// for dry
export const useItem = () => useContext(ItemContext);
