import React from 'react';
import FavoritesList from "./favorites-list";
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from "history";
import {render, screen} from "@testing-library/react";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";

const store = configureStore({});
const history = createMemoryHistory();
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
    images: ['1','2','3','4'],
    previewImage: 'url',
    host: {
      name: 'Alex',
      isPro: false,
      avatarUrl: 'url',
      id: 2,
    },
});
const fakeFavorites = new Array(3).fill('').map(()=> fakeOffer());
const fakeState = {
  USER: {
    favorite: fakeFavorites,
  },
}

describe('Component: FavoriteList', () => {
  it('should render FavoriteList', () => {
    render(
      <Provider store={store(fakeState)}>
        <Router history={history}>
          <FavoritesList/>
        </Router>
      </Provider>
    )

    expect(screen.getByText('Saved listing')).toBeInTheDocument();
  })
})
