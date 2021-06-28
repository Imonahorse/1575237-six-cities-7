import React from 'react';
import {Link} from 'react-router-dom';
import SignOutButton from '../sign-out-button/sign-out-button.jsx';
import SignInButton from '../sign-in-button/sign-in-button.jsx';
import PropTypes from 'prop-types';
import {AppRoutes, AuthorizationStatus} from '../../const.js';
import {connect} from 'react-redux';

function Header({authorizationStatus}) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to={AppRoutes.MAIN}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          {
            authorizationStatus === AuthorizationStatus.AUTH
              ? <SignOutButton/>
              : <SignInButton/>
          }
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});

export {Header};
export default connect(mapStateToProps)(Header);

