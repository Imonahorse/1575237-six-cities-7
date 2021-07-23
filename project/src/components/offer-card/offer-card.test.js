import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import OfferCard from './offer-card.jsx';
import {fakeOffers} from '../../mocks/mocks.js';
import {AuthorizationStatus} from '../../const.js';

let store = null;
let history = null;

describe('Component: OfferCard', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    const fakeStore = configureStore({});

    store = fakeStore({
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
      },
    });
  });

  it('should render "OfferCard"', () => {
    const fakeOffer = fakeOffers[0];

    render(
      <Provider store={store}>
        <Router history={history}>
          <OfferCard offer={fakeOffer}/>
        </Router>
      </Provider>,
    );

    expect(screen.getByTestId(/offer card/i)).toBeInTheDocument();
    expect(screen.getByText(`${fakeOffer.type}`)).toBeInTheDocument();
    expect(screen.getByText(`${fakeOffer.title}`)).toBeInTheDocument();
  });
});
