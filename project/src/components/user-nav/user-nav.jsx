import {connect} from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import {logout} from '../../store/api-actions.js';
import {AppRoutes, AuthorizationStatus, LoadingSize} from '../../const.js';
import {Link} from 'react-router-dom';
import useError from '../../hooks/useError.js';
import Loading from '../loading/loading.jsx';
import styles from './user-nav.module.css';

function UserNav({onLogoutClick, login, authorizationStatus, logoutStatus, user}) {
  const isAuth = authorizationStatus === AuthorizationStatus.AUTH;
  const errorMessage = useError(logoutStatus);

  return (
    <nav className="header__nav">
      {errorMessage}
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link
            className="header__nav-link header__nav-link--profile"
            to={isAuth ? AppRoutes.FAVORITES : AppRoutes.SIGN_IN}
          >
            <div className="header__avatar-wrapper user__avatar-wrapper">
              {
                isAuth &&
                <img src={user.avatar_url} alt="avatar">
                </img>
              }
            </div>
            {
              isAuth
                ? <span className="header__user-name user__name">{login}</span>
                : <span className="header__login">Sign in</span>
            }
          </Link>
        </li>
        {
          isAuth &&
          <li className="header__nav-item">
            <a onClick={onLogoutClick} className="header__nav-link" href="/#">
              {
                logoutStatus.isLoading
                  ? <Loading size={LoadingSize.SMALL} styleClass={styles.loading}/>
                  : <span className="header__signout">Sign out</span>
              }
            </a>
          </li>
        }
      </ul>
    </nav>
  );
}

UserNav.propTypes = {
  onLogoutClick: PropTypes.func.isRequired,
  login: PropTypes.string,
  authorizationStatus: PropTypes.string.isRequired,
  logoutStatus: PropTypes.shape({
    isSuccess: PropTypes.bool.isRequired,
    isError: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  login: state.user.email,
  authorizationStatus: state.authorizationStatus,
  logoutStatus: state.logoutStatus,
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  onLogoutClick() {
    dispatch(logout());
  },
});

export {UserNav};
export default connect(mapStateToProps, mapDispatchToProps)(UserNav);
