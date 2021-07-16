import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import NearPlacesOffers from './near-places-offers.jsx';
import {AuthorizationStatus} from '../../const.js';

const mockStore = configureStore({});
const fakeOffer = () => ({
  city: {
    name: 'Moscow',
    location: {
      latitude: 1,
      longitude: 2,
    },
  },
  location: {
    latitude: 1,
    longitude: 2,
  },
  description: 'i hate tests',
  isPremium: false,
  isFavorite: false,
  title: 'test sucks',
  rating: 3,
  type: 'hotel',
  bedrooms: 3,
  maxAdults: 2,
  price: 228,
  goods: ['test', 'test'],
  id: 1,
  images: ['1', '2', '3', '4'],
  previewImage: 'url',
  host: {
    name: 'Alex',
    isPro: false,
    avatarUrl: 'url',
    id: 2,
  },
});
const fakeNearOffers = new Array(5).fill('').map(() => fakeOffer());
const fakeState = {
  USER: {
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  },
};

describe('Component: Mark', () => {
  it('should render "Mark"', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={mockStore(fakeState)}>
        <Router history={history}>
          <NearPlacesOffers neighboringOffers={fakeNearOffers} />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Other places in the neighbourhood/i)).toBeInTheDocument();
  });
});
