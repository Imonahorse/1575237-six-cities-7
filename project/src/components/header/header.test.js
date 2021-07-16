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

const mockStore = configureStore({});
const history = createMemoryHistory();

describe('Component: Header', () => {
  it('should render "Header"', () => {
    render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <Header/>
        </Router>
      </Provider>,
    );

    expect(screen.getByTestId('header')).toBeInTheDocument();
  });
});
