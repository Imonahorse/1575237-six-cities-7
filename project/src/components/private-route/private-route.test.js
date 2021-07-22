import React from 'react';
import {Router, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {AuthorizationStatus} from '../../const';
import PrivateRoute from './private-route';

let store = null;
let history;
let fakeComponent;
const fakeStore = configureStore({});

describe('Component: PrivateRouter', () => {
  beforeEach(() => {
    history = createMemoryHistory();
    history.push('/private');

    fakeComponent = (testStore, testHistory) => (
      render(
        <Provider store={testStore}>
          <Router history={testHistory}>
            <Route exact path="/login"><h1>Public Route</h1></Route>
            <PrivateRoute
              exact
              path="/private"
              render={() => (<h1>Private Route</h1>)}
            />
          </Router>
        </Provider>,
      )
    );
  });

  it('should render component for public route, when user not authorized', () => {
    store = fakeStore({
      USER: {authorizationStatus: AuthorizationStatus.NO_AUTH},
    });

    fakeComponent(store, history);

    expect(screen.getByText(/Public Route/i)).toBeInTheDocument();
    expect(screen.queryByText(/Private Route/i)).not.toBeInTheDocument();
  });

  it('should render component for private route, when user authorized', () => {
    const testStore = fakeStore({
      USER: {authorizationStatus: AuthorizationStatus.AUTH},
    });

    fakeComponent(testStore, history);

    expect(screen.getByText(/Private Route/i)).toBeInTheDocument();
    expect(screen.queryByText(/Public Route/i)).not.toBeInTheDocument();
  });
});
