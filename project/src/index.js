import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {createStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import {createOffers} from './mocks/offers.js';
import reducer from 'store/reducer.js';
import {composeWithDevTools} from 'redux-devtools-extension';

const offers = createOffers();
const store = createStore(reducer, composeWithDevTools);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App offers={offers}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));

