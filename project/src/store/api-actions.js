import {actionCreator} from './actions.js';
import {AuthorizationStatus, APIRoutes} from '../const.js';
import {adaptToClient} from '../utils.js';

const fetchOffersList = () => async(dispatch, _, api) => {
  dispatch(actionCreator.loadOffersRequest());
  try {
    const {data} = await api.get(APIRoutes.OFFERS);
    const adaptedData = data.map((offer) => adaptToClient(offer));
    return dispatch(actionCreator.loadOffersSuccess(adaptedData));
  } catch {
    return dispatch(actionCreator.loadOffersError());
  }
};

const checkAuth = () => (dispatch, _, api) => (
  api.get(APIRoutes.LOGIN)
    .then(() => dispatch(actionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => dispatch(actionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)))
);

const login = ({login: email, password}) => (dispatch, _, api) => (
  api.post(APIRoutes.LOGIN, {email, password})
    .then(({data}) => localStorage.setItem('token', data.token))
    .then(() => dispatch(actionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
);

const logout = () => (dispatch, _, api) => (
  api.delete(APIRoutes.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(actionCreator.logout(AuthorizationStatus.NO_AUTH)))
);

export {
  fetchOffersList,
  checkAuth,
  login,
  logout
};
