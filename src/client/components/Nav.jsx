import React from 'react';
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

const DropDown = styled.div`
  position: fixed;
  bottom: 33%;
  right: 0.5em;

  &:hover ${DropContent} {
    display: grid;
  }
`;

const StyledLink = styled(Link)`
  color: black;
  font-weight: bold;
  padding: 20px;
`;

const Nav = () => (
  <DropDown>
    <span> - </span>
    <DropContent>
      <StyledLink to="/">home</StyledLink>
      <StyledLink to="/about">about</StyledLink>
      <StyledLink to="/awaytocallnumber">call us</StyledLink>
    </DropContent>
  </DropDown>
);

export default Nav;
