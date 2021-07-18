import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import MainEmpty from './main-empty.jsx';

let history = null;
let store = null;

describe('Component: MainEmpty', () => {
  beforeAll(() => {
    history = createMemoryHistory();
    const fakeStore = configureStore({});
    store = fakeStore({});
  });

  it('should render MainEmpty', () => {
    const fakeCity = 'Moscow';

    render(
      <Provider store={store}>
        <Router history={history}>
          <MainEmpty cityState={fakeCity}/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/No places to stay available/i)).toBeInTheDocument();
  });
});
