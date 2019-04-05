import React, { useEffect } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Link, Switch, Route, Redirect } from 'react-router-dom';

const Modal = styled.div.attrs({ className: 'MyCustomizeModal' })`
  display: none;
  position: fixed;
  z-index: 22;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
`;

const CloseButton = styled.span`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;

  &:focus,
  &:hover {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;

const ComboEditor = styled.div`
  display: grid;
  grid-template-columns: auto 100px;
`;

const Entree = () => {
  return <div>entree stuff</div>;
};

const Side = () => {
  return <div>Side stuff</div>;
};

const Drink = () => {
  return <div>Drink stuff</div>;
};

const CustomizeModal = ({ display, setDisplay }) => {
  return (
    <Modal style={{ display }}>
      <ModalContent>
        <CloseButton onClick={() => setDisplay('none')}>&times;</CloseButton>
        {/* <Router>
          <ComboEditor>
            <div>
              <Switch>
                <Route path="/entree" component={Entree} />
                <Route path="/side" component={Side} />
                <Route path="/drink" component={Drink} />
              </Switch>
            </div>
            <ul>
              <li>
                <Link to="/entree">Entrée</Link>
              </li>
              <li>
                <Link to="/side">Side</Link>
              </li>
              <li>
                <Link to="/drink">Drink</Link>
              </li>
            </ul>
          </ComboEditor>
        </Router> */}
        <p> Coming Soon </p>
      </ModalContent>
    </Modal>
  );
};

export default CustomizeModal;
