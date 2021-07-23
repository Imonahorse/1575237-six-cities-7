import React, {useState} from 'react';
import {login} from '../../store/actions/api-actions.js';
import styles from './login.module.css';
import Loading from '../loading/loading.jsx';
import useError from '../../hooks/useError/useError.js';
import cn from 'classnames';
import {LoadingSize} from '../../const.js';
import {selectLoginStatus} from '../../store/reducer/user-data/selectors.js';
import {useSelector, useDispatch} from 'react-redux';

const inputs = {
  email: 'E-mail',
  password: 'Password',
};

const initialState = {
  email: {
    value: '',
    error: 'E-mail в стандартном формате.',
    touched: false,
    isValid: false,
    rule: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  },
  password: {
    value: '',
    error: 'Только цифры и латинские буквы, от 6 до 16 символов.',
    touched: false,
    isValid: false,
    rule: /^[a-zA-Z0-9]{6,16}$/,
  },
};

function LoginForm() {
  const [inputsState, setInputsState] = useState(initialState);
  const loginStatus = useSelector(selectLoginStatus);
  const dispatch = useDispatch();
  const errorMessage = useError(loginStatus);
  const getLogin = (authData) => {
    dispatch(login(authData));

  };
  const handleChange = (evt) => {
    evt.preventDefault();
    const {name, value} = evt.target;
    const touched = !!value.trim();
    const isValid = inputsState[name].rule.test(value);

    setInputsState((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        value,
        touched,
        isValid,
      },
    }));
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();

    getLogin({
      login: inputsState.email.value,
      password: inputsState.password.value,
    });
  };

  return (
    <section className="login">
      {errorMessage}
      <h1 className="login__title">Sign in</h1>
      <form className="login__form form" name="form" action="#" method="post" onSubmit={handleSubmit}>
        {Object.keys(inputs).map((item) => (
          <div className={cn('login__input-wrapper form__input-wrapper', {[styles.loginInput]: true})} key={item}>
            <label className="visually-hidden" htmlFor={item}>{inputs[item]}</label>
            <input
              className="login__input form__input"
              type={item}
              name={item}
              id={item}
              placeholder={inputs[item]}
              value={inputsState[item].value}
              required
              onChange={handleChange}
            />
            {!inputsState[item].isValid && inputsState[item].touched && <p className={styles.errorMessage}>{inputsState[item].error}</p>}
          </div>
        ))}
        <button
          className="login__submit form__submit button"
          type="submit"
          disabled={!(inputsState.email.isValid && inputsState.password.isValid)}
        >
          {
            loginStatus.isLoading
              ? <Loading size={LoadingSize.SMALL} styleClass={styles.loading}/>
              : 'Sign In'
          }
        </button>
      </form>
    </section>
  );
}

export default LoginForm;
