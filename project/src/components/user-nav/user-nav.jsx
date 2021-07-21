import React from 'react';
import {logout} from '../../store/actions/api-actions.js';
import {AppRoutes, AuthorizationStatus, LoadingSize} from '../../const.js';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import useError from '../../hooks/useError.js';
import Loading from '../loading/loading.jsx';
import styles from './user-nav.module.css';
import {selectUser, selectLogoutStatus, selectAuthorizationStatus} from '../../store/reducer/user-data/selectors.js';

function UserNav() {
  const authorizationStatus = useSelector(selectAuthorizationStatus);
  const logoutStatus = useSelector(selectLogoutStatus);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const onLogoutClick = () => dispatch(logout());

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
                <img src={user.avatarUrl} alt="avatar">
                </img>
              }
            </div>
            {
              isAuth
                ? <span className="header__user-name user__name">{user.email}</span>
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

export default UserNav;
