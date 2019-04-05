import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const DropContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  right: 0;
  min-height: 50px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
`;

const DropButton = styled.button`
  position: fixed;
  bottom: 33%;
  right: 0.5em;

  &:hover {
    background-color: #eee;
  }
`;

const StyledLink = styled(Link)`
  color: black;
  font-weight: bold;
  padding: 20px;
`;

const Nav = () => {
  const [icon, setIcon] = useState('+');
  const [display, setDisplay] = useState('none');
  return (
    <div>
      <DropButton
        onClick={() => {
          if (icon === '+') {
            setDisplay('block');
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
        <StyledLink to="/">home</StyledLink>
        <StyledLink to="/pdf-menu">PDF - menu</StyledLink>
        <StyledLink to="/admin">admin</StyledLink>
      </DropContent>
    </div>
  );
};

export default Nav;
