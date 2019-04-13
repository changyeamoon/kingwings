import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import device from '../device';
import store from '../svg/store.svg';
import pdf from '../svg/pdf.svg';
import admin from '../svg/admin.svg';
import googleMap from '../svg/google-map.svg';
import phone from '../svg/smart-phone.svg';
import circle from '../svg/circle.svg';

const DropContent = styled.div`
  display: none;
  position: absolute;
  right: 0%;
  height: auto;
  width: 25px;
  bottom: 10%;
  grid-gap: 10px 0px;
  grid-auto-rows: 2em;
  justify-items: center;
  align-items: center;

  @media (max-width: 320px) {
    bottom: 10%;
  }
  @media ${device.tablet} {
    display: grid !important;
    grid-gap: 20px 0px;
    grid-auto-rows: 5em;
    bottom: 10%;
    right: 4%;
  }

  @media ${device.laptop} {
    bottom: 10%;
  }
`;

const DropButton = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  border: 0 !important;
  position: fixed;
  bottom: 50%;
  right: 0em;
  background: none;
  width: 8vw;
  transform: scale(1)
  transition: transform .2s;

  &:hover {
    transform: scale(1.2);
  }
  &:focus {
    outline: 0;
    transform: scale(.3);

  }

  @media ${device.tablet} {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  color: black;
  font-weight: bold;
  width: 1em;

  @media ${device.tablet} {
    width: 4em;
  }
`;

const A = styled.a`
  color: black;
  font-weight: bold;
  width: 1em;

  @media ${device.tablet} {
    width: 4em;
  }
`;

const LinkSVG = styled.img`
  object-fit: contain;
`;

const Nav = () => {
  const [icon, setIcon] = useState('+');
  const [display, setDisplay] = useState('none');
  return (
    <>
      <DropButton
        onClick={() => {
          if (icon === '+') {
            setDisplay('grid');
            setIcon('-');
          } else {
            setDisplay('none');
            setIcon('+');
          }
        }}
      >
        <LinkSVG src={circle} alt="nav-button" />
      </DropButton>
      <DropContent style={{ display }}>
        <StyledLink to="/">
          <LinkSVG src={store} alt="home" />
        </StyledLink>
        <StyledLink to="/pdf-menu">
          <LinkSVG src={pdf} alt="pdf" />
        </StyledLink>
        <StyledLink to="/admin">
          <LinkSVG src={admin} alt="admin" />
        </StyledLink>
        <A
          href="https://www.google.com/maps/dir//3862+Flat+Shoals+Rd,+Union+City,+GA+30291/@33.5859943,-84.5188253,17z/data=!4m16!1m7!3m6!1s0x88f4e3f8a986ff4b:0xc41f278e32509327!2s3862+Flat+Shoals+Rd,+Union+City,+GA+30291!3b1!8m2!3d33.5859943!4d-84.5166366!4m7!1m0!1m5!1m1!1s0x88f4e3f8a986ff4b:0xc41f278e32509327!2m2!1d-84.5166366!2d33.5859943"
          target="_blank"
          rel="noopener noreferrer"
          data-initialized="true"
        >
          <LinkSVG src={googleMap} alt="google-map" />
        </A>
        <A href="tel:7707741155" data-initialized="true">
          <LinkSVG src={phone} alt="phone-call" />
        </A>
      </DropContent>
    </>
  );
};

export default Nav;
