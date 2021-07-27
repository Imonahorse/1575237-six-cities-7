import React from 'react';
import {AppRoutes} from '../../const.js';
import {Link} from 'react-router-dom';
import LoginForm from '../../components/login-form/login-form.jsx';
import {selectCity} from '../../store/reducer/app-process/selectors.js';
import {useSelector} from 'react-redux';
import Layout from '../../layout/layout.jsx';

function Login() {
  const city = useSelector(selectCity);

  return (
    <Layout>
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
    </Layout>
  );
}

export default Login;
