import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import CommentsForm from './comments-form.jsx';
import userEvent from "@testing-library/user-event";

const fakeState = {
  DATA: {
    commentStatus: {
      isLoading: false,
      isError: false,
      isSuccess: false,
    }
  },
}

const mockStore = configureStore({});

describe('Component: CommentsForm', () => {
  it('should render "CommentsForm"', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={mockStore(fakeState)}>
        <Router history={history}>
          <CommentsForm />
        </Router>
      </Provider>
    );

    expect(screen.getByText(/To submit review please make sure to set/i)).toBeInTheDocument();
    userEvent.type(screen.getByTestId('textarea'), 'testtest');
    expect(screen.getByDisplayValue(/testtest/i)).toBeInTheDocument();
  });
});
