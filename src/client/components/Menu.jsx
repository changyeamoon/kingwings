import React, { useState } from 'react';
import gql from '../gqlQueries';

const Menu = () => {
  const [combos, setCombos] = useState([]);

  useEffect(() => {});

  const listCombos = () => {
    combos.map((combo, index) => {
      return <div>{combo.name}</div>;
    });
  };
  return <>{listCombos()}</>;
};

export default Menu;
