import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import CommentRatingList from './comment-rating-list.jsx';

let history = null;
let store = null;

describe('Component: CommentRatingList', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    const fakeStore = configureStore({});

    store = fakeStore({});
  });

  it('should render CommentRatingList', () => {
    const ratingCount = 5;
    const fakeFn = jest.fn();
    const fakeValue = '3';

    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <CommentRatingList onInputChange={fakeFn} isActive={fakeValue}/>
        </Router>
      </Provider>,
    );

    expect(container.querySelectorAll('.form__rating-input')).toHaveLength(ratingCount);
  });
});
