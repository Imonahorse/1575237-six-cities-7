import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import OfferCard from './offer-card.jsx';
import {createFakeOffer} from '../favorites-city/favorites-city-mock.js';
import {AuthorizationStatus} from '../../const.js';
const mockStore = configureStore({});

describe('Component: OfferCard', () => {
  it('should render "OfferCard"', () => {
    const history = createMemoryHistory();
    const fakeStore = {
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
      },
    };
    const fakeOffer = createFakeOffer(3);

    render(
      <Provider store={mockStore(fakeStore)}>
        <Router history={history}>
          <OfferCard offer={fakeOffer} />
        </Router>
      </Provider>,
    );

    expect(screen.getByTestId(/offer card/i)).toBeInTheDocument();
    expect(screen.getByText(`${fakeOffer.type}`)).toBeInTheDocument();
    expect(screen.getByText(`${fakeOffer.title}`)).toBeInTheDocument();
  });
});
