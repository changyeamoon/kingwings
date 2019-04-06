import React from 'react';
import styled from 'styled-components';
import logo from '../logo.svg';
import googleMap from '../google-map.svg';
import redFullLogo from '../red-full-logo.svg';
import device from '../device';

const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  font-family: 'Alegreya Sans SC', sans-serif;

  @media ${device.tablet} {
    background: #d74841;
  }
`;

const StickyLogo = styled.div`
  width: 70%;
  height: auto;
  align-self: center;
  justify-self: center;
  margin: 0;

  @media (min-width: 768px) {
    width: 66%;
  }
`;

const StyledDiv = styled.div`
  width: auto;
  justify-self: stretch;
  align-self: center;
  font-size: 2.5vw;
  padding-top: 10px;
`;

const P = styled.p`
  margin: 0;
  letter-spacing: 0.08em;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
`;

const A = styled.a`
  margin: 0;
  letter-spacing: 0.08em;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  text-decoration: none !important;
  color: #fac52b;

  &:visited {
    text-decoration: none;
    color: #fac52b;
  }
  &:focus {
    text-decoration: none;
    color: black;
  }
  &:hover,
  &:active {
    text-decoration: none;
    color: black;
  }
`;

const CrownSVG = styled.img`
  object-fit: contain;
  padding: 2px 0px;
  @media (min-width: 768px) {
    display: none;
  }
`;
const FullLogoSVG = styled.img`
  display: none;
  padding-bottom: 6px;
  @media (min-width: 768px) {
    display: block;
    object-fit: contain;
    height: 100%;
  }
`;
const GoogleMapSVG = styled.img`
  object-fit: contain;
  padding-top: 3px;
  width: 1.5em;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledDiv>
        <P>33862 Flat Shoals Rd,</P>
        <P>Union City, GA 300291</P>
        <A
          href="https://www.google.com/maps/dir//3862+Flat+Shoals+Rd,+Union+City,+GA+30291/@33.5859943,-84.5188253,17z/data=!4m16!1m7!3m6!1s0x88f4e3f8a986ff4b:0xc41f278e32509327!2s3862+Flat+Shoals+Rd,+Union+City,+GA+30291!3b1!8m2!3d33.5859943!4d-84.5166366!4m7!1m0!1m5!1m1!1s0x88f4e3f8a986ff4b:0xc41f278e32509327!2m2!1d-84.5166366!2d33.5859943"
          target="_blank"
          rel="noopener noreferrer"
          data-initialized="true"
        >
          <GoogleMapSVG src={googleMap} alt="google-map-icon" />
        </A>
      </StyledDiv>
      <StickyLogo>
        <CrownSVG src={logo} alt="crown" />
        <FullLogoSVG src={redFullLogo} alt="king-logo" />
      </StickyLogo>
      <StyledDiv>
        <P>MON - SAT: 11AM - 10PM</P>
        <P>SUNDAY : 12PM - 7PM</P>
        <A href="tel:7707741155" data-initialized="true">
          + 770.774.1155
        </A>
      </StyledDiv>
    </StyledHeader>
  );
};

export default Header;
