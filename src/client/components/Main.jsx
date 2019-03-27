import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Menu from './Menu';

const Home = styled.div`
  position: absolute;
  text-align: center;
  color: #313b72;
`;

const Main = () => {
  return (
    <Home>
      <div>Hello from main</div>
      <Menu />
    </Home>
  );
};

export default Main;
