import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import LoginForm from './login-form.jsx';
import userEvent from '@testing-library/user-event';

const mockStore = configureStore({});
const history = createMemoryHistory();
const fakeStore = {
  USER: {
    loginStatus: {
      isError: false,
      isLoading: false,
      isSuccess: false,
    },
  },
};

describe('Component: LoginForm', () => {
  it('should render "LoginForm"', () => {
    render(
      <Provider store={mockStore(fakeStore)}>
        <Router history={history}>
          <LoginForm />
        </Router>
      </Provider>,
    );

    expect(screen.getAllByText(/Sign in/i)).toBeTruthy();
    expect(screen.getByTestId('button')).toBeDisabled();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });
  it('should fills in the form and unlocks the submit button', () => {
    render(
      <Provider store={mockStore(fakeStore)}>
        <Router history={history}>
          <LoginForm />
        </Router>
      </Provider>,
    );

    userEvent.type(screen.getByLabelText(/e-mail/i), 'keks@mail.ru');
    userEvent.type(screen.getByLabelText(/password/i), '123456aaa');

    expect(screen.getByDisplayValue(/keks@mail.ru/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/123456aaa/i)).toBeInTheDocument();
    expect(screen.getByTestId('button')).toBeEnabled();
  });
});
