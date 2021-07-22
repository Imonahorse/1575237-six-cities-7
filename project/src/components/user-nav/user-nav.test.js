import React from 'react';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import UserNav from './user-nav.jsx';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {Route, Router, Switch} from 'react-router-dom';
import {AppRoutes, AuthorizationStatus} from '../../const.js';
import userEvent from '@testing-library/user-event';


let store = null;
let history = null;
const fakeStore = configureStore({});
let fakeState = null;
let fakeComponent = null;

describe('Component User-Nav', () => {
  beforeAll(() => {
    history = createMemoryHistory();
    history.push(AppRoutes.MAIN);

    fakeState = {
      USER: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        logoutStatus: {isError: false, isLoading: false, isSuccess: false},
        user: {
          avatarUrl: 'url',
        },
      },
    };

    fakeComponent = (testStore, testHistory) => (
      render(
        <Provider store={testStore}>
          <Router history={testHistory}>
            <UserNav/>
          </Router>
        </Provider>,
      )
    );
  });

  it('should render User-Nav component without user AUTH', () => {
    store = fakeStore(fakeState);

    fakeComponent(store, history);

    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });

  it('should render User-Nav component with user AUTH', () => {
    fakeState.USER.authorizationStatus = AuthorizationStatus.AUTH;
    store = fakeStore(fakeState);

    fakeComponent(store, history);

    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
  });

  it('should render User-Nav component with logout status error', () => {
    fakeState.USER.authorizationStatus = AuthorizationStatus.AUTH;
    fakeState.USER.logoutStatus.isError = true;
    store = fakeStore(fakeState);

    fakeComponent(store, history);

    expect(screen.getByText(/Сервер не отвечает, попробуйте позже/i)).toBeInTheDocument();
  });

  it('user should click on his email', () => {
    fakeState.USER.authorizationStatus = AuthorizationStatus.AUTH;
    store = fakeStore(fakeState);

    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path={AppRoutes.MAIN}>
              <UserNav/>
            </Route>
            <Route exact path={AppRoutes.FAVORITES}>
              <h1>Favorite page</h1>
            </Route>
          </Switch>
        </Router>
      </Provider>,
    );

    const button = container.querySelector('.header__nav-link');
    userEvent.click(button);
    expect(screen.getByText(/Favorite page/i)).toBeInTheDocument();
  });
});
