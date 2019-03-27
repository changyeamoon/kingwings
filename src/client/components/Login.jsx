import React from 'react';
import { Redirect } from 'react-router-dom';

const Login = ({ login, setLogin, location }) => {
  const { from } = location.state || { from: { pathname: '/' } };
  return login ? (
    <Redirect to={from} />
  ) : (
    <>
      <div>you gotta log in as an admin to see {from.pathname} son </div>
      <button
        type="button"
        onClick={() => {
          setLogin(true);
        }}
      >
        log in
      </button>
    </>
  );
};

export default Login;
