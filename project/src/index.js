import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {createStore, applyMiddleware} from '@reduxjs/toolkit';
import createApi from './services/api.js';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {rootReducer} from './store/reducer/root-reducer.js';
import {composeWithDevTools} from 'redux-devtools-extension';
import {requireAuthorization} from './store/actions.js';
import {AuthorizationStatus} from './const.js';
import {checkAuth, fetchOffersList} from './store/api-actions.js';
import redirect from './store/middlewares/redirect.js';

const api = createApi(() => requireAuthorization(AuthorizationStatus.NO_AUTH));
export const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk.withExtraArgument(api)),
  applyMiddleware(redirect),
));

store.dispatch(checkAuth());
store.dispatch(fetchOffersList());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));

