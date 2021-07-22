import React from 'react';
import {render, screen} from '@testing-library/react';
import {Route, Router, Switch} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import Header from './header.jsx';
import {AppRoutes} from '../../const.js';
import userEvent from '@testing-library/user-event';

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
    history.push(AppRoutes.FAVORITES);
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

  it('user should click on Header logo', () => {
    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path={AppRoutes.FAVORITES}>
              <Header/>
            </Route>
            <Route exact path={AppRoutes.MAIN}>
              <h1>Main page</h1>
            </Route>
          </Switch>
        </Router>
      </Provider>,
    );

    const button = container.querySelector('.header__logo-link');
    userEvent.click(button);
    expect(screen.getByText(/Main page/i)).toBeInTheDocument();
  });
});
