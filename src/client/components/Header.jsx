import React from 'react';
import styled from 'styled-components';
import logo from '../logo.svg';

const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  font-family: 'Alegreya Sans SC', sans-serif;
`;

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
        <a
          href="https://www.google.com/maps/dir//3862+Flat+Shoals+Rd,+Union+City,+GA+30291/@33.5859943,-84.5188253,17z/data=!4m16!1m7!3m6!1s0x88f4e3f8a986ff4b:0xc41f278e32509327!2s3862+Flat+Shoals+Rd,+Union+City,+GA+30291!3b1!8m2!3d33.5859943!4d-84.5166366!4m7!1m0!1m5!1m1!1s0x88f4e3f8a986ff4b:0xc41f278e32509327!2m2!1d-84.5166366!2d33.5859943"
          target="_blank"
          rel="noopener noreferrer"
          data-initialized="true"
        >
          Directions
        </a>
      </StyledDiv>
      <StickyLogo>
        <img src={logo} alt="crown" />
      </StickyLogo>
      <StyledDiv>
        <P>MON - SAT: 11AM - 10PM</P>
        <P>SUNDAY : 12PM - 7PM</P>
        <a href="tel:7707741155" data-initialized="true">
          +7707741155
        </a>
      </StyledDiv>
    </StyledHeader>
  );
};

export default Header;
