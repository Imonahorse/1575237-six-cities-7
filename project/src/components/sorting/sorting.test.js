import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import Sorting from './sorting.jsx';

let store = null;
let history = null;

describe('Component: Sorting', () => {
  beforeAll(() => {
    history = createMemoryHistory();
    const fakeStore = configureStore({});
    store = fakeStore({
      APP: {
        sort: 'Popular',
      },
    });
  });

  it('should render "Sorting"', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <Sorting/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Sort by/i)).toBeInTheDocument();
  });
});
