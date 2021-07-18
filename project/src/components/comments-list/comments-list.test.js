import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import CommentsList from './comments-list.jsx';
import {createFakeCommentArray} from '../comment/comment-mock.js';

const number = 5;
const comments = createFakeCommentArray(5);

let store = null;
let history = null;

describe('Component: "CommentsList"', () => {
  beforeAll(() => {
    jest.mock('../comment/comment.jsx', () => (
      function fakeComponent() {
        return (
          <div data-testid="test">
          </div>
        );
      }
    ));

    history = createMemoryHistory();
    const fakeStore = configureStore({});
    store = fakeStore({});
  });

  it('should render CommentsList with right count of comments', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <CommentsList comments={comments}/>
        </Router>
      </Provider>,
    );

    expect(screen.getAllByTestId('test')).toHaveLength(number);
  });
});
