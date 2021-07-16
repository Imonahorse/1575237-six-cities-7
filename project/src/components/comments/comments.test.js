import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import Comments from './comments.jsx';
import {AuthorizationStatus} from "../../const";

const comment =(i)=> ({
  comment: 'comment text',
  date: new Date().toISOString(),
  id: i,
  rating: i,
  user: {
    avatarUrl: 'url',
    id: i,
    isPro: true,
    name: 'Alex',
  }
});
const number = 5;
const comments = new Array(number).fill('').map((_, i) => comment(i));
const state = {
  USER: {
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  }
}

const mockStore = configureStore({});

describe('Component: "Comments"', () => {
  it('should render "Comments"', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={mockStore(state)}>
        <Router history={history}>
          <Comments comments={comments}/>
        </Router>
      </Provider>
    );

    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
  });
});
