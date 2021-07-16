import React from 'react';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import App from './app.jsx';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {Router} from 'react-router-dom';
import {AppRoutes, AuthorizationStatus} from '../../const.js';
import {createFakeOffersArray, createFakeOffer} from '../favorites-city/favorites-city-mock.js';
import {createFakeCommentArray} from '../comment/comment-mock';

let fakeApp = null;
let history = null;
let store = null;

describe('Component: App', () => {
  beforeAll(() => {
    history = createMemoryHistory();
    const fakeStore = configureStore({});
    store = fakeStore({
      USER: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        logoutStatus: { isSuccess: false, isLoading: false, isError: false},
        loginStatus: { isSuccess: false, isLoading: false, isError: false},
        favoriteStatus: { isSuccess: false, isLoading: false, isError: false},
        setFavoriteStatus: { isSuccess: false, isLoading: false, isError: false},
      },
      APP: {
        city: 'Paris',
      },
      DATA: {
        offers: createFakeOffersArray(5),
        offer: createFakeOffer(3),
        offerStatus: { isSuccess: false, isLoading: false, isError: false},
        comments: createFakeCommentArray(5),
        nearPlacesOffersStatus: { isSuccess: false, isLoading: false, isError: false},
        nearPlacesOffers: createFakeOffersArray(5),
        commentsStatus: { isSuccess: false, isLoading: false, isError: false},
        offersStatus: { isSuccess: false, isLoading: false, isError: false},
      },
    });
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
