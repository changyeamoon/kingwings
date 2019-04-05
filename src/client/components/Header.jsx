import React from 'react';
import styled from 'styled-components';
import logo from '../logo.svg';

const StickyLogo = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 25vw;
  height: auto;
  align-self: center;
  justify-self: center;
  margin: 0;
`;

const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  font-family: 'Alegreya Sans SC', sans-serif;
`;

const StyledDiv = styled.div`
  width: auto;
  justify-self: stretch;
  align-self: center;
  font-size: 1em;
`;

const P = styled.p`
  margin: 0;
  font-weight: 900;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledDiv>
        <P>33862 Flat Shoals Rd,</P>
        <P>Union City, GA 300291</P>
        <button type="button">Directions</button>
      </StyledDiv>
      <StickyLogo>
        <img src={logo} alt="crown" />
      </StickyLogo>
      <StyledDiv>
        <P>MON - SAT: 11AM - 10PM</P>
        <P>SUNDAY : 12PM - 7PM</P>
        <P>770 - 774 - 1155</P>
      </StyledDiv>
    </StyledHeader>
  );
};

export default Header;
