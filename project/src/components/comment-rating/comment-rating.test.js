import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import CommentRating from './comment-rating.jsx';

let history = null;
let store = null;

describe('Component: CommentRating', () => {
  beforeAll(() => {
    history = createMemoryHistory();
    const fakeStore = configureStore({});
    store = fakeStore({});
  });

  it('should render CommentRating', () => {
    const fakeFn = () => {
    };
    const fakeValue = '3';
    const ratingCount = 5;

    render(
      <Provider store={store}>
        <Router history={history}>
          <CommentRating onInputChange={fakeFn} isActive={fakeValue}/>
        </Router>
      </Provider>,
    );

    expect(screen.getAllByTestId('test')).toHaveLength(ratingCount);
  });
});
