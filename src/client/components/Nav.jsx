import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const DropContent = styled.div`
  font-size: 1em;
  width: 26em;
  height: 26em;
  overflow: hidden;
  position: fixed;
  z-index: 10;
  bottom: -13em;
  left: 50%;
  border-radius: 50%;
  margin-left: -13em;
  transform: scale(0.1);
  transition: all 0.3s ease;
  background: #eee;
`;

const DropButton = styled.button`
  border: none;
  background: none;
  color: white;
  text-align: Center;
  font-size: 1.5em;
  padding-bottom: 1em;
  height: 3.5em;
  width: 3.5em;
  background-color: #111;
  position: fixed;
  left: 50%;
  margin-left: -1.75em;
  bottom: -1.75em;
  border-radius: 50%;
  cursor: pointer;
  z-index: 11

  &:hover {
    background-color: #eee;
  }
`;

const Li = styled.li`
  position: absolute;
  font-size: 1.5em;
  width: 10em;
  height: 10em;
  transform-origin: 100% 100%;
  overflow: hidden;
  left: 50%;
  top: 50%;
  margin-top: -1.3em;
  margin-left: -10em;
  transition: border 0.3s ease;

  &:nth-child(1) {
    transform: rotate(-10deg) skew(50deg);
  }
  &:nth-child(2) {
    transform: rotate(30deg) skew(50deg);
  }
  &:nth-child(3) {
    transform: rotate(70deg) skew(50deg);
  }
`;

const StyledLink = styled(Link)`
  display: block;
  font-size: 1.18em;
  height: 14.5em;
  width: 14.5em;
  position: absolute;
  bottom: -7.25em;
  right: -7.25em;
  border-radius: 50%;
  text-decoration: none;
  color: red;
  padding-top: 1.8em;
  text-align: center;
  transform: skew(-50deg) rotate(-70deg) scale(1);
  transition: opacity 0.3s, color 0.3s;
`;

const Nav = () => {
  const [icon, setIcon] = useState('+');
  const [dropStyle, setDropStyle] = useState({});
  return (
    <div>
      <DropButton
        onClick={() => {
          if (icon === '+') {
            setDropStyle(prevDropStyle => {
              return Object.assign({ ...prevDropStyle }, { transform: 'scale(1)' });
            });
            setIcon('-');
          } else {
            setDropStyle(prevDropStyle => {
              return Object.assign({ ...prevDropStyle }, { transform: 'scale(0.1)' });
            });
            setIcon('+');
          }
        }}
      >
        {icon}
      </DropButton>
      <DropContent style={dropStyle}>
        <ul>
          <Li>
            <StyledLink to="/">home</StyledLink>
          </Li>
          <Li>
            <StyledLink to="/pdf-menu">PDF - menu</StyledLink>
          </Li>
          <Li>
            <StyledLink to="/admin">admin</StyledLink>
          </Li>
        </ul>
      </DropContent>
    </div>
  );
};

export default Nav;
