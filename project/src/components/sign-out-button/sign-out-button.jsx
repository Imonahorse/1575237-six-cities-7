import {connect} from 'react-redux';
import React from 'react';
import {logout} from '../../store/api-actions.js';
import {AppRoutes} from '../../const.js';
import {Link} from 'react-router-dom';

function SignOutButton({onLogoutClick, login}) {
  return(
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to={AppRoutes.FAVORITES}>
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className="header__user-name user__name">{login}</span>
          </Link>
        </li>
        <li className="header__nav-item">
          <a onClick={onLogoutClick} className="header__nav-link" href="#">
            <span className="header__signout">Sign out</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}

const mapStateToProps = (state) => ({
  login: state.login,
});

const mapDispatchToProps = (dispatch) => ({
  onLogoutClick() {
    dispatch(logout());
  }
})

export {SignOutButton};
export default connect(mapStateToProps, mapDispatchToProps)(SignOutButton)
