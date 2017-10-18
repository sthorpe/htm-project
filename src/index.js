import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
import App from './components/app.js';

const token = localStorage.getItem('token');
if (token) {
  console.log('Found session logging user in.');
}


render((
  <BrowserRouter>
    <App session={token} />
  </BrowserRouter>
), document.getElementById('root')
);
