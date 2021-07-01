import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {login} from '../../store/api-actions.js';
import {connect} from 'react-redux';
import styles from './login.module.css';
import Loading from '../loading/loading.jsx';
import useError from '../../hooks/useError.js';
import cn from 'classnames';
import {LoadingSize} from '../../const.js';

const inputs = {
  email: 'E-mail',
  password: 'Password',
};

const initialState = {
  email: {
    value: '',
    error: '(ಥ﹏ಥ)',
    touched: false,
    isValid: false,
    rule: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  },
  password: {
    value: '',
    error: '(〒﹏〒)',
    touched: false,
    isValid: false,
    rule: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
  },
};

function LoginForm({getLogin, loginStatus}) {
  const [inputsState, setInputsState] = useState(initialState);
  const errorMessage = useError(loginStatus);

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

    setInputsState('');
  };

  return (
    <section className="login">
      {errorMessage}
      <h1 className="login__title">Sign in</h1>
      <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
        {Object.keys(inputs).map((item) => (
          <div className={cn('login__input-wrapper form__input-wrapper', {[styles.loginInput]: true})} key={item}>
            <label className="visually-hidden">{inputs[item]}</label>
            <input
              className="login__input form__input"
              type={item}
              name={item}
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

LoginForm.propTypes = {
  getLogin: PropTypes.func.isRequired,
  loginStatus: PropTypes.shape({
    isSuccess: PropTypes.bool.isRequired,
    isError: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  loginStatus: state.loginStatus,
});

const mapDispatchToProps = (dispatch) => ({
  getLogin(authData) {
    dispatch(login(authData));
  },
});

export {LoginForm};
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
