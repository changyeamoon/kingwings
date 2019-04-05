import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const DropContent = styled.div`
  display: none;
  position: absolute;
  right: 0;
  height: auto;
  width: 25px;
  bottom: 20%;
  grid-gap: 15px 0px;
`;

const DropButton = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  border: 0 !important;
  position: fixed;
  bottom: 33%;
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
      </DropContent>
    </div>
  );
};

export default Nav;
