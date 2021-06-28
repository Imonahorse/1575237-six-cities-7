import React, {useRef} from 'react';
import Header from '../../components/header/header.jsx';
import {connect} from 'react-redux';
import {login} from '../../store/api-actions.js';
import {AppRoutes} from '../../const.js';
import {Link} from 'react-router-dom';
import {actionCreator} from '../../store/actions.js';

function SignIn({onSubmit, getLogin}) {
  const loginRef = useRef('');
  const passwordRef = useRef('');

  const inSubmitClick = (evt) => {
    evt.preventDefault();

    getLogin(loginRef.current.value);
    onSubmit({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    <div className="page page--gray page--login">
      <Header/>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={inSubmitClick}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input ref={loginRef} className="login__input form__input" type="email" name="email" placeholder="Email" required/>
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input ref={passwordRef} className="login__input form__input" type="password" name="password" placeholder="Password" required/>
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoutes.MAIN}>
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  },
  getLogin(email) {
    dispatch(actionCreator.getLogin(email));
  },
});

export {SignIn};
export default connect(null, mapDispatchToProps)(SignIn);

