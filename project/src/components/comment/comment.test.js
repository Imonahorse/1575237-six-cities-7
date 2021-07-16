import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import Comment from './comment.jsx';
import {createFakeComment} from './comment-mock.js';

let mockStore = null;
let history = null;

describe('Component: Cities', () => {
  beforeAll(() => {
    mockStore = configureStore({});
    history = createMemoryHistory();
  });

  it('should render "Cities"', () => {
    render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <Comment comment={createFakeComment(1)}/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/comment text/i)).toBeInTheDocument();
    expect(screen.getByText(/Alex/i)).toBeInTheDocument();
    expect(screen.getByText(/Rating/i)).toBeInTheDocument();
  });
});
