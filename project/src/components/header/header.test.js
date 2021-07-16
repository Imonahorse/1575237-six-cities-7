import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import Header from './header.jsx';

jest.mock('../user-nav/user-nav.jsx', () => (
  function fakeComponent() {
    return (
      <div data-testid="test">
      </div>
    );
  }
));

let store = null;
let history = null;

describe('Component: Header', () => {
  beforeAll(() => {
    history = createMemoryHistory();
    const fakeStore = configureStore({});
    store = fakeStore({});
  });

  it('should render Header', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <Header/>
        </Router>
      </Provider>,
    );

    expect(screen.getByTestId('header')).toBeInTheDocument();
  });
});
