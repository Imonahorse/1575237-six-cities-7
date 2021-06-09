import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {createOffers} from './mocks/offers.js';

const offers = createOffers();

ReactDOM.render(
  <React.StrictMode>
    <App offers={offers}/>
  </React.StrictMode>,
  document.getElementById('root'));

