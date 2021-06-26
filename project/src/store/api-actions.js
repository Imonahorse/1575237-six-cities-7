import {actionCreator} from './actions.js';
import {AuthorizationStatus, APIRoute} from '../const.js';

const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => dispatch(actionCreator.loadOffers(data)))
);

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(actionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => dispatch(actionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)))
);

const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => localStorage.setItem('token', data.token))
    .then(() => dispatch(actionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
);

const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(actionCreator.logout()))
);

export {
  fetchOffersList,
  checkAuth,
  login,
  logout
};
