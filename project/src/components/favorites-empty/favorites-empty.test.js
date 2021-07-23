import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import FavoritesEmpty from './favorites-empty.jsx';

let history = null;
let store = null;

describe('Component: FavoritesEmpty', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    const fakeStore = configureStore({});

    store = fakeStore({});
  });

  it('should render "FavoritesEmpty"', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <FavoritesEmpty/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Favorites/i)).toBeInTheDocument();
    expect(screen.getByText(/Nothing yet saved/i)).toBeInTheDocument();
    expect(screen.getByText(/Save properties to narrow down search or plan your future trips/i)).toBeInTheDocument();
  });
});
