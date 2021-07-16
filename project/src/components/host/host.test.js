import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import Host from './host.jsx';

const fakeHost = {
  avatarUrl: 'url',
  id: 228,
  isPro: false,
  name: 'Ashot',
};
const fakeDescription = 'I hate tests';

const mockStore = configureStore({});

describe('Component: Host', () => {
  it('should render "Host"', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <Host host={fakeHost} description={fakeDescription}/>
        </Router>
      </Provider>
    );

    expect(screen.getByText(/Ashot/i)).toBeInTheDocument();
    expect(screen.getAllByText(/I hate tests/i)).toHaveLength(2);
  });
});
