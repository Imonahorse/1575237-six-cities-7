import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import BookmarkButton from './bookmark-button.jsx';
import {AuthorizationStatus} from '../../const.js';
import userEvent from "@testing-library/user-event";

let history = null;
let store = null;
let fakeComponent = null;

describe('Component: BookmarkButton', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    const fakeStore = configureStore({});

    store = fakeStore({
      USER: {
        authorizationStatus: AuthorizationStatus.UNKNOWN,
      },
    });

    fakeComponent = (id, favorite) => (
      render(
        <Provider store={store}>
          <Router history={history}>
            <BookmarkButton id={id} isFavorite={favorite}/>
          </Router>
        </Provider>,
      )
    );
  });

  it('should render inactive BookmarkButton', () => {
    const fakeId = '1';
    const fakeFavorite = false;

    fakeComponent(fakeId, fakeFavorite);

    expect(screen.queryByRole('button')).not.toHaveClass('property__bookmark-button--active');
  });

  it('should render active BookmarkButton after user click', () => {
    const fakeId = '1';
    const fakeFavorite = true;

    const {rerender} = fakeComponent(fakeId, fakeFavorite);

    userEvent.click(screen.getByRole('button'));

    rerender(
      <Provider store={store}>
        <Router history={history}>
          <BookmarkButton id={fakeId} isFavorite={fakeFavorite}/>
        </Router>
      </Provider>,
    )
    expect(screen.getByRole('button')).toHaveClass('place-card__bookmark-button button place-card__bookmark-button--active');
  });
});
