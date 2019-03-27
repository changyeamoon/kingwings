import React, { useState, useEffect } from 'react';
import gql from '../gqlQueries';

const Menu = () => {
  const [combos, setCombos] = useState([]);

  useEffect(() => {
    gql.getCombos().then(res => {
      setCombos(res);
    });
  }, []);

  const listCombos = () => {
    console.log('combos::: ', combos);
    combos.map((combo, index) => {
      return <div>{combo.name}</div>;
    });
  };
  return <>{listCombos()}</>;
};

export default Menu;
