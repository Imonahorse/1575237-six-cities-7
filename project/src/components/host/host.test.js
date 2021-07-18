import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import Host from './host.jsx';

let history = null;
let store = null;

describe('Component: Host', () => {
  beforeAll(() => {
    history = createMemoryHistory();
    const fakeStore = configureStore({});
    store = fakeStore({});
  });

  it('should render "Host"', () => {
    const fakeHost = {
      avatarUrl: 'url',
      id: 228,
      isPro: false,
      name: 'Ashot',
    };
    const fakeDescription = 'I hate tests';

    render(
      <Provider store={store}>
        <Router history={history}>
          <Host host={fakeHost} description={fakeDescription}/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Ashot/i)).toBeInTheDocument();
    expect(screen.getAllByText(/I hate tests/i)).toHaveLength(2);
  });
});
