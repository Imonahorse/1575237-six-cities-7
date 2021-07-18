import React from 'react';
import {Link} from 'react-router-dom';
import UserNav from '../user-nav/user-nav.jsx';
import {AppRoutes} from '../../const.js';

function Header() {
  return (
    <header className="header" data-testid="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to={AppRoutes.MAIN}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <UserNav/>
        </div>
      </div>
    </header>
  );
}

export default Header;

