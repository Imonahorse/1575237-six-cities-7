import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import CommentRatingList from './comment-rating-list.jsx';
import userEvent from '@testing-library/user-event';

let history = null;
let store = null;
const fakeFn = jest.fn();
const fakeValue = '3';

describe('Component: CommentRatingList', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    const fakeStore = configureStore({});

    store = fakeStore({});
  });

  it('should render CommentRatingList', () => {
    const ratingCount = 5;

    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <CommentRatingList onInputChange={fakeFn} isActive={fakeValue}/>
        </Router>
      </Provider>,
    );

    expect(container.querySelectorAll('.form__rating-input')).toHaveLength(ratingCount);
  });

  it('should render CommentRatingList when user click', () => {
    render(<CommentRatingList onInputChange={fakeFn} isActive={fakeValue}/>);

    const radios = screen.getAllByRole('radio');
    expect(radios).toHaveLength(5);
    expect(radios[2]).toBeChecked();

    userEvent.click(radios[0]);
    expect(fakeFn).toBeCalled();
  });
});
