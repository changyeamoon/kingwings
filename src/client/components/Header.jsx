import React from 'react';
import styled from 'styled-components';
import logo from '../logo.svg';

const StickyLogo = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 25vw;
  height: auto;
  text-align: center;
  margin: auto;
`;

const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  font-family: 'Alegreya Sans SC', sans-serif;
`;

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <span>33862 Flat Shoals Rd, Union City, GA 300291</span>
        <button type="button">Get Directions</button>
      </div>
      <StickyLogo>
        <img src={logo} alt="crown" />
      </StickyLogo>
      <div>
        <span>MON - SAT: 11AM - 10PM</span>
        <span>SUNDAY: 12PM - 7PM</span>
        <span>770 774 1155</span>
      </div>
    </StyledHeader>
  );
};

export default Header;
