import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './components/Nav';
import Main from './components/Main';
import Login from './components/Login';
import Header from './components/Header';
import Admin from './components/Admin';

const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 100px;
  height: 100px;
  text-align: center;
  font-size: 2em;
`;

const App = () => {
  const [login, setLogin] = useState(false);

  function AdminRoute({ component: Component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          login ? (
            <Component {...props} />
          ) : (
            <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
          )
        }
      />
    );
  }

  return (
    <Router>
      <Container>
        <Header />
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route
            exact
            path="/login"
            render={props => <Login login={login} setLogin={setLogin} location={props.location} />}
          />
          <Route path="/about" />
          <AdminRoute path="/admin" component={Admin} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
