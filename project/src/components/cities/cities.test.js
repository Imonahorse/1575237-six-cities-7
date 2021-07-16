import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Cities from './cities.jsx';


const state = {
  APP: {
    city: 'Moscow',
  }
}

const mockStore = configureStore({});

describe('Component: Cities', () => {
  it('should render "Cities"', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={mockStore(state)}>
        <Router history={history}>
          <Cities />
        </Router>
      </Provider>
    );

    expect(screen.getByText(/To bookmarks/i)).toBeInTheDocument();
  });
});
