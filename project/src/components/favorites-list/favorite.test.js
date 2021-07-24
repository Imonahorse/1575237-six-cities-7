import React from 'react';
import FavoritesList from './favorites-list.jsx';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {fakeOffers} from '../../mocks/mocks.js';
import {AuthorizationStatus} from '../../const.js';

let store = null;
let history = null;

const fakeFavorites = fakeOffers;

describe('Component: FavoriteList', () => {
  beforeAll(() => {
    history = createMemoryHistory();
    const fakeStore = configureStore({});
    store = fakeStore({
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
      },
      DATA: {
        favorite: fakeFavorites,
      },
    });
  });

  it('should render FavoriteList', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <FavoritesList/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText('Saved listing')).toBeInTheDocument();
  });
});
