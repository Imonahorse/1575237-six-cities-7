import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import Sorting from './sorting.jsx';
import userEvent from "@testing-library/user-event";

let store = null;
let history = null;
let fakeState = null;
let fakeComponent = null;
const fakeStore = configureStore({});

describe('Component: Sorting', () => {
  beforeAll(() => {
    fakeState = {
      APP: {
        sort: 'Popular',
      },
    }
    history = createMemoryHistory();
    store = fakeStore(fakeState);
    fakeComponent =(store, history) => (
      <Provider store={store}>
        <Router history={history}>
          <Sorting/>
        </Router>
      </Provider>
    )
  });

  it('should render "Sorting"', () => {
    render(fakeComponent(store, history));

    expect(screen.getByText(/Sort by/i)).toBeInTheDocument();
  });

  it('user click should render "Sorting" with opened menu', () => {
    render(fakeComponent(store, history));


    userEvent.click(screen.getByText(/Sort by/i))
    expect(screen.getAllByText(/Popular/i)).toHaveLength(2);
    expect(screen.getByText(/Price: low to high/i)).toBeInTheDocument();
    expect(screen.getByText(/Price: high to low/i)).toBeInTheDocument();
    expect(screen.getByText(/Top rated first/i)).toBeInTheDocument();
  });

  it('user click should change "Sorting" state', () => {
    const {rerender, container} = render(fakeComponent(store, history));

    userEvent.click(screen.getByText(/Sort by/i));
    userEvent.click(screen.getByText(/Price: low to high/i));

    fakeState.APP.sort = 'Price: low to high';
    store = fakeStore(fakeState);

    rerender(fakeComponent(store, history));

    expect(container.querySelector('.places__option--active').textContent).toBe('Price: low to high');
  });
});
