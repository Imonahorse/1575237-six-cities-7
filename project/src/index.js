import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const OFFERS_AMOUNT= 5;
const getOffers = (offersAmount) => new Array(offersAmount).fill(null).map((_, i) => ({id: i}));
const offers = getOffers(OFFERS_AMOUNT);

ReactDOM.render(
  <React.StrictMode>
    <App offers={offers}/>
  </React.StrictMode>,
  document.getElementById('root'));
