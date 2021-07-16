import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import Sorting from './sorting.jsx';

const mockStore = configureStore({});
const fakeState = {
  APP: {
    sort: 'Popular',
  },
};

describe('Component: Sorting', () => {
  it('should render "Sorting"', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={mockStore(fakeState)}>
        <Router history={history}>
          <Sorting />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Sort by/i)).toBeInTheDocument();
  });
});
