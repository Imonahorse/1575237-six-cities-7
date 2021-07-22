import React from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import OffersPreview from './offers-preview.jsx';
import {render, screen} from '@testing-library/react';
import {createFakeOffersArray} from '../favorites-city/favorites-city-mock.js';
import {AuthorizationStatus} from '../../const.js';

let history = null;
let store = null;


describe('Component: offers-preview', () => {
  beforeAll(() => {
    history = createMemoryHistory();
    const fakeStore = configureStore({});
    store = fakeStore({
      APP: {
        sort: 'Popular',
      },
      USER: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      },
    });
  });

  it('should render offers-preview component', () => {
    const fakeOffersLength = 5;
    const fakeOffers = createFakeOffersArray(fakeOffersLength);
    const fakeCity = 'Paris';

    render(
      <Provider store={store}>
        <Router history={history}>
          <OffersPreview cityState={fakeCity} cityOffers={fakeOffers}/>
        </Router>
      </Provider>,
    );

    expect(screen.getAllByText(/Places/i)).toBeTruthy();
    expect(screen.getByText(/5 places to stay in Paris/i)).toBeInTheDocument();
  });
});
