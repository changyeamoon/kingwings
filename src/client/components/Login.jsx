import React from 'react';
import { Redirect } from 'react-router-dom';

const Login = ({ login, setLogin, from }) => {
  return login ? (
    <Redirect to={from || { from: { pathname: '/' } }} />
  ) : (
    <button
      type="button"
      onClick={() => {
        setLogin(true);
      }}
    >
      log in
    </button>
  );
};

export default Login;
