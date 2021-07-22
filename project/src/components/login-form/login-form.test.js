import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import LoginForm from './login-form.jsx';
import userEvent from '@testing-library/user-event';

let store = null;
let history = null;
let fakeComponent = null;

describe('Component: LoginForm', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    const fakeState = configureStore({});

    store = fakeState({
      USER: {
        loginStatus: {
          isError: false,
          isLoading: false,
          isSuccess: false,
        },
      },
    });

    fakeComponent = (
      <Provider store={store}>
        <Router history={history}>
          <LoginForm/>
        </Router>
      </Provider>
    );
  });

  it('should render "LoginForm"', () => {
    render(fakeComponent);

    expect(screen.getAllByText(/Sign in/i)).toBeTruthy();

    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/e-mail/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('should wrong fills in the form and test the error messages', () => {
    render(fakeComponent);

    userEvent.type(screen.getByLabelText(/e-mail/i), 'keks');
    userEvent.type(screen.getByLabelText(/password/i), 'aaa');

    expect(screen.getByDisplayValue(/keks/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/aaa/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeDisabled();

    expect(screen.getByText(/E-mail в стандартном формате/i)).toBeInTheDocument();
    expect(screen.getByText(/Только цифры и латинские буквы, от 6 до 16 символов./i)).toBeInTheDocument();
  });

  it('should fills in the form and enabled the submit button', () => {
    render(fakeComponent);

    userEvent.type(screen.getByLabelText(/e-mail/i), 'keks@mail.ru');
    userEvent.type(screen.getByLabelText(/password/i), '123456aaa');

    expect(screen.getByDisplayValue(/keks@mail.ru/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/123456aaa/i)).toBeInTheDocument();
    expect(screen.getByRole('button', {name: /sign in/i})).toBeEnabled();

    expect(screen.getByRole('form')).toHaveFormValues({
      email: 'keks@mail.ru',
      password: '123456aaa',
    });
  });
});
