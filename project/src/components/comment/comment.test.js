import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import Comment from './comment.jsx';

const comment = {
  comment: 'comment text',
  date: new Date().toISOString(),
  id: 1,
  rating: 5,
  user: {
    avatarUrl: 'url',
    id: 1,
    isPro: true,
    name: 'Alex',
  }
}

const mockStore = configureStore({});

describe('Component: Cities', () => {
  it('should render "Cities"', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={mockStore(comment)}>
        <Router history={history}>
          <Comment comment={comment}/>
        </Router>
      </Provider>
    );

    expect(screen.getByText(/comment text/i)).toBeInTheDocument();
    expect(screen.getByText(/Alex/i)).toBeInTheDocument();
  });
});
