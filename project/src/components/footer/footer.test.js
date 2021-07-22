import React from 'react';
import {render, screen} from '@testing-library/react';
import {Route, Router, Switch} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import Footer from './footer.jsx';
import {AppRoutes} from '../../const.js';
import userEvent from '@testing-library/user-event';

let store = null;
let history = null;

describe('Component: Footer', () => {
  beforeAll(() => {
    const fakeStore = configureStore({});
    store = fakeStore({});
    history = createMemoryHistory();
    history.push(AppRoutes.FAVORITES);
  });

  it('should render Footer', () => {
    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <Footer/>
        </Router>
      </Provider>,
    );

    expect(screen.getByTestId('footer')).toBeInTheDocument();
    expect(container.querySelector('.footer__logo-link')).toBeInTheDocument();
  });

  it('user should click on Footer button', () => {
    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path={AppRoutes.FAVORITES}>
              <Footer/>
            </Route>
            <Route exact path={AppRoutes.MAIN}>
              <h1>Main page</h1>
            </Route>
          </Switch>
        </Router>
      </Provider>,
    );

    const button = container.querySelector('.footer__logo-link');
    userEvent.click(button);
    expect(screen.getByText(/Main page/i)).toBeInTheDocument();
  });
});
