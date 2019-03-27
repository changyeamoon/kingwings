import React from 'react';

const Signin = ({ setLogin }) => {
  return (
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

export default Signin;
