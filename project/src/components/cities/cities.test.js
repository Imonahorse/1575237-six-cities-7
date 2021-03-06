import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import Cities from './cities.jsx';
import userEvent from '@testing-library/user-event';

let history = null;
let store = null;
let fakeComponent = null;

describe('Component: Cities', () => {
  beforeEach(() => {
    history = createMemoryHistory();

    fakeComponent = (fakeStore, fakeHistory) => (
      render(
        <Provider store={fakeStore}>
          <Router history={fakeHistory}>
            <Cities/>
          </Router>
        </Provider>,
      )
    );
  });

  it('should render Cities with all buttons', () => {
    const buttonsCount = 6;
    const fakeStore = configureStore({});
    store = fakeStore({
      APP: {
        city: 'Hamburg',
      },
    });

    const {container} = fakeComponent(store, history);

    expect(screen.getByText(/Hamburg/i)).toBeInTheDocument();
    expect(container.querySelectorAll('.locations__item')).toHaveLength(buttonsCount);
  });

  it('user click should change city in store', () => {
    const fakeStore = configureStore({});
    store = fakeStore({
      APP: {
        city: 'Hamburg',
      },
    });

    const {rerender, container} = fakeComponent(store, history);

    expect(screen.getByText(/Paris/i)).toBeInTheDocument();
    userEvent.click(screen.getByText(/Paris/i));

    const storeAfterRerender = configureStore({});
    store = storeAfterRerender({
      APP: {
        city: 'Paris',
      },
    });

    rerender(
      <Provider store={store}>
        <Router history={history}>
          <Cities/>
        </Router>
      </Provider>,
    );

    expect(container.querySelector('.tabs__item--active').textContent).toBe('Paris');
  });
});
