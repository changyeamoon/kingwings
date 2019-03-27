import React from 'react';
import styled from 'styled-components';
import logo from '../logo.svg';

const StickyLogo = styled.div`
  position: -webkit-sticky;
  position: sticky;
`;
const Header = () => {
  return (
    <StickyLogo>
      <img src={logo} alt="crown" />
    </StickyLogo>
  );
};

export default Header;
