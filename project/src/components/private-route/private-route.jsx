import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {AppRoutes, AuthorizationStatus} from '../../const.js';
import {selectAuthorizationStatus} from '../../store/reducer/user-data/selectors.js';
import {useSelector} from 'react-redux';

function PrivateRoute({render, path, exact}) {
  const authorizationStatus = useSelector(selectAuthorizationStatus);

  return (
    <Route
      path={path}
      exact={exact}
      render={() => (
        authorizationStatus === AuthorizationStatus.AUTH
          ? render()
          : <Redirect to={AppRoutes.SIGN_IN}/>
      )}
    />
  );
}

PrivateRoute.propTypes = {
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

export default PrivateRoute;
