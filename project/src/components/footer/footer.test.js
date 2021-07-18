import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import Footer from './footer.jsx';

let store = null;
let history = null;

describe('Component: Footer', () => {
  beforeAll(() => {
    const fakeStore = configureStore({});
    store = fakeStore({});
    history = createMemoryHistory();
  });

  it('should render Footer', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <Footer/>
        </Router>
      </Provider>,
    );

    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
