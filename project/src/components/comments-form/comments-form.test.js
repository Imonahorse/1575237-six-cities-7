import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import CommentsForm from './comments-form.jsx';
import userEvent from '@testing-library/user-event';

let store = null;
let history = null;

describe('Component: CommentsForm', () => {
  beforeAll(() => {
    history = createMemoryHistory();
    const fakeStore = configureStore({});
    store = fakeStore({
      DATA: {
        commentStatus: {
          isLoading: false,
          isError: false,
          isSuccess: false,
        },
      },
    });
  });

  it('should render "CommentsForm"', () => {

    render(
      <Provider store={store}>
        <Router history={history}>
          <CommentsForm/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/To submit review please make sure to set/i)).toBeInTheDocument();
    userEvent.type(screen.getByTestId('textarea'), 'test');
    expect(screen.getByDisplayValue(/test/i)).toBeInTheDocument();
  });
});
