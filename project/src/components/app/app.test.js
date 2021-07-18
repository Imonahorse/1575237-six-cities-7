import React from 'react';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import App from './app.jsx';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {Router} from 'react-router-dom';
import {AppRoutes} from '../../const.js';
import {fakeStore as mockStore} from './app-mock.js';

let fakeApp = null;
let history = null;
let store = null;

describe('Component: App', () => {
  beforeAll(() => {
    history = createMemoryHistory();
    const fakeStore = configureStore({});
    store = fakeStore(mockStore);
    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <App/>
        </Router>
      </Provider>
    );
  });

  it('should render Main screen when user navigate to "/"', () => {
    history.push(AppRoutes.MAIN);
    render(fakeApp);

    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByText(/Cities/i)).toBeInTheDocument();
    expect(screen.getByText(/Places/i)).toBeInTheDocument();
  });

  it('should render Login screen when user navigate to "/login"', () => {
    history.push(AppRoutes.SIGN_IN);
    render(fakeApp);

    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getAllByText(/Sign In/i)).toBeTruthy();
    expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  it('should render 404 screen when user navigate to "/not_found"', () => {
    history.push(AppRoutes.NOT_FOUND);
    render(fakeApp);

    expect(screen.getByText('This page does not exist')).toBeInTheDocument();
    expect(screen.getByText('Return to the main page')).toBeInTheDocument();
  });

  it('should render favorite screen when user navigate to "/favorite"', () => {
    history.push(AppRoutes.FAVORITES);
    render(fakeApp);

    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  it('should render favorite screen when user navigate to "/offer"', () => {
    history.push(AppRoutes.OFFER);
    render(fakeApp);

    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('gallery component')).toBeInTheDocument();
    expect(screen.getByText(/Other places in the neighbourhood/i)).toBeInTheDocument();
    expect(screen.getByTestId('offer-page component')).toBeInTheDocument();
  });
});
