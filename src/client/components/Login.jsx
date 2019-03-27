import React from 'react';
import { Redirect } from 'react-router-dom';

const Login = props => {
  console.log('location', props);
  return login ? (
    <Redirect to={from || { from: { pathname: '/' } }} />
  ) : (
    <button
      type="button"
      onClick={() => {
        console.log('hello');
        setLogin(true);
      }}
    >
      log in
    </button>
  );
};

export default Login;
