import React from 'react';
import { AppFromChild } from './components';
import { render } from 'react-dom';

render(
  <React.StrictMode>
    <AppFromChild />
  </React.StrictMode>,
  document.getElementById('root'),
);
