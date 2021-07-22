import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import BookmarkButton from './bookmark-button.jsx';
import {AuthorizationStatus} from '../../const.js';

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

  it('should render active BookmarkButton', () => {
    const fakeId = '1';
    const fakeFavorite = true;

    fakeComponent(fakeId, fakeFavorite);

    expect(screen.getByText(/To bookmarks/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveClass('property__bookmark-button--active');
  });

  it('should render inactive BookmarkButton', () => {
    const fakeId = '1';
    const fakeFavorite = false;

    fakeComponent(fakeId, fakeFavorite);

    expect(screen.queryByRole('button')).not.toHaveClass('property__bookmark-button--active');
  });
});
