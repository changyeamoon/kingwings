import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Home = styled.div`
  position: absolute;
  text-align: center;
  color: #313b72;
`;

const Main = () => {
  return (
    <Home>
      <div>Hello from main</div>
    </Home>
  );
};

export default Main;
