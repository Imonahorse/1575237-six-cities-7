import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import OfferList from './offers-list.jsx';
import {createFakeOffersArray} from '../favorites-city/favorites-city-mock.js';
import {AuthorizationStatus} from '../../const.js';

const mockStore = configureStore({});

describe('Component: OfferCard', () => {
  it('should render "OfferCard"', () => {
    const history = createMemoryHistory();
    const fakeStore = {
      USER: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      },
    };

    render(
      <Provider store={mockStore(fakeStore)}>
        <Router history={history}>
          <OfferList cityOffers={createFakeOffersArray(5)} handleActiveCard={()=>{}} />
        </Router>
      </Provider>,
    );

    expect(screen.getByTestId(/OffersList component/i)).toBeInTheDocument();
  });
});
