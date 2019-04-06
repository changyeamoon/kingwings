import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const DropContent = styled.div`
  display: none;
  position: absolute;
  right: 0;
  height: auto;
  width: 25px;
  bottom: 12%;
  grid-gap: 20px 0px;
`;

const DropButton = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  border: 0 !important;
  position: fixed;
  bottom: 50%;
  right: 0em;
  width: 25px;

  &:hover {
    background-color: #eee;
  }
  &:focus {
    outline: 0;
  }
`;

const StyledLink = styled(Link)`
  color: black;
  font-weight: bold;
`;

const Nav = () => {
  const [icon, setIcon] = useState('+');
  const [display, setDisplay] = useState('none');
  return (
    <div>
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
        {icon}
      </DropButton>
      <DropContent style={{ display }}>
        <StyledLink to="/">🏠</StyledLink>
        <StyledLink to="/pdf-menu">P</StyledLink>
        <StyledLink to="/admin">A</StyledLink>
        <a
          href="https://www.google.com/maps/dir//3862+Flat+Shoals+Rd,+Union+City,+GA+30291/@33.5859943,-84.5188253,17z/data=!4m16!1m7!3m6!1s0x88f4e3f8a986ff4b:0xc41f278e32509327!2s3862+Flat+Shoals+Rd,+Union+City,+GA+30291!3b1!8m2!3d33.5859943!4d-84.5166366!4m7!1m0!1m5!1m1!1s0x88f4e3f8a986ff4b:0xc41f278e32509327!2m2!1d-84.5166366!2d33.5859943"
          target="_blank"
          rel="noopener noreferrer"
          data-initialized="true"
        >
          🗺️
        </a>
        <a href="tel:7707741155" data-initialized="true">
          ☎️
        </a>
      </DropContent>
    </div>
  );
};

export default Nav;
