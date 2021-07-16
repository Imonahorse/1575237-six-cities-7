import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import Mark from './mark.jsx';

const mockStore = configureStore({});

describe('Component: Mark', () => {
  it('should render "Mark"', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <Mark />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Premium/i)).toBeInTheDocument();
  });
});
