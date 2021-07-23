import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import NearPlacesOffers from './near-places-offers.jsx';
import {AuthorizationStatus} from '../../const.js';
import {fakeOffers} from '../../mocks/mocks.js';

let history = null;
let store = null;

describe('Component: NearPlacesOffers', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    const fakeStore = configureStore({});

    store = fakeStore({
      USER: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      },
    });
  });

  it('should render "NearPlacesOffers"', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <NearPlacesOffers neighboringOffers={fakeOffers}/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Other places in the neighbourhood/i)).toBeInTheDocument();
  });
});
