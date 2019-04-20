import React from 'react';
import styled from 'styled-components';
import logo from '../svg/logo.svg';
import googleMap from '../svg/google-map.svg';
import phoneCall from '../svg/phone-call.svg';
import redFullLogo from '../svg/red-full-logo.svg';
import device from '../device';

const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 1fr 1.3fr;
  font-family: 'Alegreya Sans SC', sans-serif;
  background: #d74841;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const StickyLogo = styled.div`
  width: 100%;
  height: auto;
  align-self: center;
  justify-self: center;
  margin: 0;

  @media (min-width: 768px) {
    width: 80%;
  }
`;

const StyledDiv = styled.div`
  width: auto;
  justify-self: center;
  align-self: center;
  padding-top: 10px;
  font-size: 3vw;
  font-weight: 1000;

  @media ${device.tablet} {
    font-size: 2vw;
  }
`;

const P = styled.p`
  margin: 0;
  letter-spacing: 0.08em;
  font-family: 'Quicksand', sans-serif;
  text-align: justify;
`;

const A = styled.a`
  margin: 0;
  letter-spacing: 0.08em;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  text-decoration: none !important;
  color: #fac52b;
  text-align: center;

  @media ${device.tablet} {
  }

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
  @media ${device.tablet} {
    display: none;
  }
`;
const FullLogoSVG = styled.img`
  display: none;
  @media ${device.tablet} {
    display: block;
    object-fit: contain;
    height: 100%;
    width: auto;
  }
`;
const GoogleMapSVG = styled.img`
  display: inline-block;
  vertical-align: middle;
  margin: auto;
  object-fit: contain;
  width: 1.5em;
  padding: 10px 0px;
`;
const PhoneCallSVG = styled.img`
  display: inline-block;
  vertical-align: middle;
  margin: auto;
  object-fit: contain;
  width: 1.5em;
  padding: 10px 0px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledDiv>
        <P
          onClick={e => {
            e.target.select();
            document.execCommand('copy');
          }}
        >
          33862 Flat Shoals Rd,
          <br />
          Union City, GA 300291
        </P>
        <A
          href="https://www.google.com/maps/dir//3862+Flat+Shoals+Rd,+Union+City,+GA+30291/@33.5859943,-84.5188253,17z/data=!4m16!1m7!3m6!1s0x88f4e3f8a986ff4b:0xc41f278e32509327!2s3862+Flat+Shoals+Rd,+Union+City,+GA+30291!3b1!8m2!3d33.5859943!4d-84.5166366!4m7!1m0!1m5!1m1!1s0x88f4e3f8a986ff4b:0xc41f278e32509327!2m2!1d-84.5166366!2d33.5859943"
          target="_blank"
          rel="noopener noreferrer"
          data-initialized="true"
        >
          <GoogleMapSVG src={googleMap} alt="google-map-icon" />
          <span> Directions</span>
        </A>
      </StyledDiv>
      <StickyLogo>
        <CrownSVG src={logo} alt="crown" />
        <FullLogoSVG src={redFullLogo} alt="king-logo" />
      </StickyLogo>
      <StyledDiv>
        <P>
          Mon - Sat : 11 - 10
          <br />
          Sunday : 12 - 7
        </P>
        <A href="tel:7707741155" data-initialized="true">
          <PhoneCallSVG src={phoneCall} alt="phone-call-logo" />
          <span> 770.774.1155</span>
        </A>
      </StyledDiv>
    </StyledHeader>
  );
};

export default Header;
