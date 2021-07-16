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

describe('Component: BookmarkButton', () => {
  beforeAll(() => {
    history = createMemoryHistory();
    const fakeStore = configureStore({});
    store = fakeStore({
      USER: {
        authorizationStatus: AuthorizationStatus.UNKNOWN,
      },
    });
  });

  it('should render BookmarkButton', () => {
    const fakeId = '1';
    const fakeFavorite = true;

    render(
      <Provider store={store}>
        <Router history={history}>
          <BookmarkButton id={fakeId} isFavorite={fakeFavorite}/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/To bookmarks/i)).toBeInTheDocument();
  });
});
