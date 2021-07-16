import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import Cities from './cities.jsx';


let history = null;
let store = null;

describe('Component: Cities', () => {
  beforeAll(() => {
    history = createMemoryHistory();
    const fakeStore = configureStore({});
    store = fakeStore({
      APP: {
        city: 'Hamburg',
      },
    });
  });

  it('should render Cities with all buttons', () => {
    const buttonsCount = 6;

    render(
      <Provider store={store}>
        <Router history={history}>
          <Cities/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Hamburg/i)).toBeInTheDocument();
    expect(screen.getAllByTestId('test')).toHaveLength(buttonsCount);
  });
});
