import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import OfferList from './offers-list.jsx';
import {createFakeOffersArray} from '../../mocks/favorites-city-mock.js';
import {AuthorizationStatus} from '../../const.js';

let history = null;
let store = null;

describe('Component: OffersList', () => {
  beforeAll(() => {
    history = createMemoryHistory();
    const fakeStore = configureStore({});
    store = fakeStore({
      USER: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      },
    });
  });

  it('should render OffersList', () => {
    const fakeOffers = createFakeOffersArray(5);

    render(
      <Provider store={store}>
        <Router history={history}>
          <OfferList cityOffers={fakeOffers} handleActiveCard={() => {
          }}
          />
        </Router>
      </Provider>,
    );

    expect(screen.getByTestId(/OffersList component/i)).toBeInTheDocument();
  });
});
