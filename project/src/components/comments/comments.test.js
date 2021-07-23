import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import Comments from './comments.jsx';
import {AuthorizationStatus} from '../../const.js';
import {createFakeCommentArray} from '../../mocks/comment-mock.js';

const number = 2;
const comments = createFakeCommentArray(number);

const fakeComponent = (fakeStore, fakeHistory) => (
  <Provider store={fakeStore}>
    <Router history={fakeHistory}>
      <Comments comments={comments}/>
    </Router>
  </Provider>
);

let store = null;
let history = null;

describe('Component: "Comments"', () => {
  beforeAll(() => {
    history = createMemoryHistory();
  });

  it('should render Comments without CommentsForm', () => {
    const fakeStore = configureStore({});
    store = fakeStore({
      USER: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      },
    });
    render(fakeComponent(store, history));

    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
    expect(screen.getAllByText(new RegExp(`${number}`, 'i'))).toBeTruthy();
  });

  it('should render Comments with CommentsForm', () => {
    const fakeStore = configureStore({});
    store = fakeStore({
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
      },
      DATA: {
        commentStatus: '',
      },
    });

    render(fakeComponent(store, history));

    expect(screen.getByText(/Your review/i)).toBeInTheDocument();
  });
});
