import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import Loading from './loading.jsx';

let store = null;
let history = null;

describe('Component: FavoritesEmpty', () => {
  beforeAll(() => {
    history = createMemoryHistory();
    const fakeState = configureStore({});
    store = fakeState({});
  });

  it('should render "FavoritesEmpty"', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <Loading/>
        </Router>
      </Provider>,
    );

    expect(screen.getByTestId('loading component')).toBeInTheDocument();
  });
});
