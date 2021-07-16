import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import FavoritesCity from './favorites-city.jsx';
import {createFakeOffer} from './favorites-city-mock.js';
import {AuthorizationStatus} from '../../const.js';

let mockStore = null;
let history = null;

const number = 3;
const fakeOffersArray = new Array(number).fill('').map((_, i) => createFakeOffer(i));
const fakeCity = 'Moscow';
const fakeStore = {
  USER: {
    authorizationStatus: AuthorizationStatus.AUTH,
  },
};

describe('Component: "CommentsList"', () => {
  beforeAll(() => {
    history = createMemoryHistory();
    mockStore = configureStore({});
  });

  it('should render CommentsList', () => {
    render(
      <Provider store={mockStore(fakeStore)}>
        <Router history={history}>
          <FavoritesCity cityOffers={fakeOffersArray} city={fakeCity}/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText('Moscow')).toBeInTheDocument();
  });

  it('should check the number of rendered comments', () => {
    render(
      <Provider store={mockStore(fakeStore)}>
        <Router history={history}>
          <FavoritesCity cityOffers={fakeOffersArray} city={fakeCity}/>
        </Router>
      </Provider>,
    );

    expect(screen.getAllByText(/title/i)).toHaveLength(number);
  });
});
