import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import FavoritesCity from './favorites-city.jsx';
import {fakeOffers} from '../../mocks/mocks.js';
import {AuthorizationStatus} from '../../const.js';

let store = null;
let history = null;
let fakeComponent = null;

describe('Component: "CommentsList"', () => {
  beforeAll(() => {
    const fakeOffersArray = fakeOffers;
    const fakeCity = 'Moscow';
    history = createMemoryHistory();

    const fakeStore = configureStore({});
    store = fakeStore({
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
      },
    });

    fakeComponent = (
      <Provider store={store}>
        <Router history={history}>
          <FavoritesCity cityOffers={fakeOffersArray} city={fakeCity}/>
        </Router>
      </Provider>
    );
  });

  it('should render CommentsList', () => {
    render(fakeComponent);

    expect(screen.getByText('Moscow')).toBeInTheDocument();
  });

  it('should check the number of rendered comments', () => {
    render(fakeComponent);

    expect(screen.getAllByTestId(/offer card/i)).toHaveLength(fakeOffers.length);
  });
});
