import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import OfferGallery from './offer-gallery.jsx';

let history = null;
let store = null;

describe('Component: OfferCard', () => {
  beforeAll(() => {
    history = createMemoryHistory();
    const fakeStore = configureStore({});
    store = fakeStore({});
  });

  it('should render "OfferCard"', () => {
    const fakeImage = ['test1', 'test2', 'test3'];

    render(
      <Provider store={store}>
        <Router history={history}>
          <OfferGallery images={fakeImage}/>
        </Router>
      </Provider>,
    );

    expect(screen.getByTestId(/gallery component/i)).toBeInTheDocument();
    expect(screen.getAllByTestId(/test/i)).toHaveLength(fakeImage.length);
  });
});
