import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Cities from './cities.jsx';


let history = null;
let mockStore = null;

describe('Component: Cities', () => {
  beforeAll(()=>{
    mockStore = configureStore({});
    history = createMemoryHistory();
  });

  it('should render Cities with all buttons', () => {
    const fakeStore = {
      APP: {
        city: 'Hamburg',
      },
    };
    const buttonsCount = 6;

    render(
      <Provider store={mockStore(fakeStore)}>
        <Router history={history}>
          <Cities />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Hamburg/i)).toBeInTheDocument();
    expect(screen.getAllByTestId('test')).toHaveLength(buttonsCount);
  });
});
