import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import Mark from './mark.jsx';

let store = null;
let history = null;

describe('Component: Mark', () => {
  beforeAll(() => {
    history = createMemoryHistory();
    const fakeStore = configureStore({});
    store = fakeStore({});
  });

  it('should render Mark', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <Mark/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Premium/i)).toBeInTheDocument();
  });
});
