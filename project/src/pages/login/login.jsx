import React from 'react';
import Header from '../../components/header/header.jsx';
import {AppRoutes} from '../../const.js';
import {Link} from 'react-router-dom';
import LoginForm from '../../components/login-form/login-form.jsx';
import {selectCity} from '../../store/reducer/app-process/selectors.js';
import {useSelector} from 'react-redux';

function Login() {
  const city = useSelector(selectCity);

  return (
    <div className="page page--gray page--login">
      <Header/>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <LoginForm/>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoutes.MAIN}>
                <span>{city}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;
