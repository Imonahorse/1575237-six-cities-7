import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import Comment from './comment.jsx';
import {createFakeComment} from './comment-mock.js';

let store = null;
let history = null;

describe('Component: Comment', () => {
  beforeAll(() => {
    history = createMemoryHistory();
    const fakeStore = configureStore({});
    store = fakeStore({});
  });

  it('should render Comment', () => {
    const fakeComment = createFakeComment(1);
    render(
      <Provider store={store}>
        <Router history={history}>
          <Comment comment={fakeComment}/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/comment text/i)).toBeInTheDocument();
    expect(screen.getByText(/Alex/i)).toBeInTheDocument();
    expect(screen.getByText(/Rating/i)).toBeInTheDocument();
  });
});
