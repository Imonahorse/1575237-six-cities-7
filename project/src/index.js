import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  COUNT_OF_RENTAL_OFFERS: 10,
};

ReactDOM.render(
  <React.StrictMode>
    <App countOfRentalOffers={Setting.COUNT_OF_RENTAL_OFFERS}/>
  </React.StrictMode>,
  document.getElementById('root'));
