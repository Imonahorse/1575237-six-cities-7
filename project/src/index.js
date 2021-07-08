import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import createApi from './services/api.js';
import {Provider} from 'react-redux';
import {rootReducer} from './store/reducer/root-reducer.js';
import {requiredAuthorization} from './store/actions.js';
import {AuthorizationStatus} from './const.js';
import {checkAuth, fetchOffersList} from './store/api-actions.js';
import redirect from './store/middlewares/redirect.js';
import {configureStore} from '@reduxjs/toolkit';

const api = createApi(() => requiredAuthorization(AuthorizationStatus.NO_AUTH));
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

store.dispatch(checkAuth());
store.dispatch(fetchOffersList());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));

