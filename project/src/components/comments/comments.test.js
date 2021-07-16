import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import Comments from './comments.jsx';
import {AuthorizationStatus} from '../../const.js';
import {createFakeComment} from '../comment/comment-mock.js';

const number = 5;
const comments = new Array(number).fill('').map((_, i) => createFakeComment(i));
const renderComponent = (fakeStore, fakeHistory) => (
  <Provider store={mockStore(fakeStore)}>
    <Router history={fakeHistory}>
      <Comments comments={comments}/>
    </Router>
  </Provider>
);

let mockStore = null;
let history = null;

describe('Component: "Comments"', () => {
  beforeAll(() => {
    history = createMemoryHistory();
    mockStore = configureStore({});
  });

  it('should render Comments without CommentsForm', () => {
    const fakeStore = {
      USER: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      },
    };

    render(renderComponent(fakeStore, history));

    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
    expect(screen.getByText(`${number}`)).toBeInTheDocument();
  });

  it('should render Comments with CommentsForm', () => {
    const fakeStore = {
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
      },
      DATA: {
        commentStatus: '',
      },
    };

    render(renderComponent(fakeStore, history));

    expect(screen.getByText(/Your review/i)).toBeInTheDocument();
  });
});
