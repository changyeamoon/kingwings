import React, { Suspense, lazy, useState, useEffect, memo } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './components/Nav';
import Header from './components/Header';
import ErrorBoundary from './components/ErrorBoundary';
const Main = lazy(() => import('./components/Main'));
const Login = lazy(() => import('./components/Login'));
const Admin = lazy(() => import('./components/Admin'));
const Pdf = lazy(() => import('./components/Pdf'));
// import Main from './components/Main';
// import Login from './components/Login';
// import Admin from './components/Admin';
// import Pdf from './components/Pdf';
import { useItem } from './state';
import gql from './gqlQueries';

const Container = styled.div`
  text-align: center;
  font-size: 12px;
`;

const App = () => {
  const [login, setLogin] = useState(false);

  const AdminRoute = ({ component: Component, ...rest }) => {
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
  };

  const store = useItem();

  useEffect(() => {
    gql.getItems().then(res => {
      store.setItem(res.data.items);
    });
  }, []);

  return (
    <Router>
      <Container>
        <Header />
        <Nav />
        <ErrorBoundary>
          <Suspense fallback={<div>loading...</div>}>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route
                exact
                path="/login"
                render={props => (
                  <Login login={login} setLogin={setLogin} location={props.location} />
                )}
              />
              <Route path="/pdf-menu" component={Pdf} />
              <AdminRoute path="/admin" component={() => <Admin setLogin={setLogin} />} />
            </Switch>
          </Suspense>
        </ErrorBoundary>
      </Container>
    </Router>
  );
};

export default memo(App);
