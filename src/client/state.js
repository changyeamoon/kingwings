import React, { useState, createContext, useContext } from 'react';

export const ItemContext = createContext();

export const ItemProvider = props => {
  const [item, setItem] = useState([]);
  return <ItemContext.Provider value={{ item, setItem }}>{props.children}</ItemContext.Provider>;
};

// for dry
export const useItem = () => useContext(ItemContext);
