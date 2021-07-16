import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import CommentsList from './comments-list.jsx';
import {createFakeComment} from '../comment/comment-mock.js';

const number = 5;
const comments = new Array(number).fill('').map((_, i) => createFakeComment(i));

jest.mock('../comment/comment.jsx', () => (
  function fakeComponent() {
    return (
      <div data-testid="test">
      </div>
    );
  }
));

let mockStore = null;
let history = null;

describe('Component: "CommentsList"', () => {
  beforeAll(() => {
    history = createMemoryHistory();
    mockStore = configureStore({});
  });

  it('should render CommentsList with right count of comments', () => {
    render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <CommentsList comments={comments}/>
        </Router>
      </Provider>,
    );

    expect(screen.getAllByTestId('test')).toHaveLength(number);
  });
});
