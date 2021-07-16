import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import MainEmpty from './main-empty.jsx';

const fakeCity = 'Moscow';
const mockStore = configureStore({});

describe('Component: MainEmpty', () => {
  it('should render "MainEmpty"', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <MainEmpty cityState={fakeCity} />
        </Router>
      </Provider>
    );

    expect(screen.getByText(/No places to stay available/i)).toBeInTheDocument();
  });
});
