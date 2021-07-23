import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import CommentsList from './comments-list.jsx';
import {fakeComments} from '../../mocks/mocks.js';

const comments = fakeComments;

let store = null;
let history = null;

jest.mock('../comment/comment.jsx', () => (
  function fakeComponent() {
    return (
      <div data-testid="test">
      </div>
    );
  }
));


describe('Component: "CommentsList"', () => {
  beforeAll(() => {
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

    expect(screen.getAllByTestId('test')).toHaveLength(fakeComments.length);
  });
});
