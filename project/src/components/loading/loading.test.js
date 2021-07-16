import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import Loading from './loading.jsx';

const mockStore = configureStore({});
const history = createMemoryHistory();

describe('Component: FavoritesEmpty', () => {
  it('should render "FavoritesEmpty"', () => {
    render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <Loading />
        </Router>
      </Provider>,
    );

    expect(screen.getByTestId('loading component')).toBeInTheDocument();
  });
});
