import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { ItemProvider } from './state';

render(
  <ItemProvider>
    <App />
  </ItemProvider>,
  document.getElementById('root'),
);

// HOT MODULE RELOADING
module.hot.accept();
