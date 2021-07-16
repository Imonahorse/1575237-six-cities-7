import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import BookmarkButton from './bookmark-button.jsx';
import {AuthorizationStatus} from "../../const";

const initialState = {
  USER: {
    authorizationStatus: AuthorizationStatus.UNKNOWN,
  },
}

const mockStore = configureStore({});

describe('Component: BookmarkButton', () => {
  it('should render "BookmarkButton"', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={mockStore(initialState)}>
        <Router history={history}>
          <BookmarkButton id={'1'} isFavorite={true} />
        </Router>
      </Provider>
    );

    expect(screen.getByText(/To bookmarks/i)).toBeInTheDocument();
  });
});
