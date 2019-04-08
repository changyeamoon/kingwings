import React, { useState, useEffect, useReducer, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './components/Nav';
import Main from './components/Main';
import Login from './components/Login';
import Header from './components/Header';
import Admin from './components/Admin';
import Pdf from './components/Pdf';
// import { StateProvider, useReducer } from './state';
import gql from './gqlQueries';

const Container = styled.div`
  text-align: center;
  font-size: 12px;
`;

const ItemContext = React.createContext([]);

const ItemProvider = props => {
  const [itemm, setItemm] = useState([]);
  return <ItemContext.Provider value={itemm}>{props.children}</ItemContext.Provider>;
};

const App = () => {
  const initialState = {
    items: [{ name: 'chang' }],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'getItems':
        return {
          ...state,
          items: action.payload,
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log('component did mount');
    gql.getItems().then(res => {
      dispatch({
        type: 'getItems',
        payload: res.data.items,
      });
    });
  }, []);

  const item = useContext(ItemContext);

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
  console.log(state.items);
  return (
    <ItemProvider>
      <Router>
        <Container>
          <Header />
          <Nav />
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
            <AdminRoute path="/admin" component={Admin} />
          </Switch>
          {state.items[0].name}
        </Container>
      </Router>
    </ItemProvider>
  );
};

export default App;
