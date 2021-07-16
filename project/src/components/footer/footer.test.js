import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import Footer from './footer.jsx';

const mockStore = configureStore({});
const history = createMemoryHistory();

describe('Component: Footer', () => {
  it('should render "Footer"', () => {
    render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <Footer/>
        </Router>
      </Provider>,
    );

    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
