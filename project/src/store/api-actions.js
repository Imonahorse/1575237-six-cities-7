import {actionCreator} from './actions.js';
import {AuthorizationStatus, APIRoutes, AppRoutes} from '../const.js';
import {adaptToClient} from '../utils.js';

const fetchOffersList = () => async (dispatch, _, api) => {
  dispatch(actionCreator.loadOffersRequest());
  try {
    const {data} = await api.get(APIRoutes.OFFERS);
    const adaptedData = data.map((offer) => adaptToClient(offer));
    dispatch(actionCreator.loadOffersSuccess(adaptedData));
  } catch {
    dispatch(actionCreator.loadOffersError());
  }
};

const checkAuth = () => async (dispatch, _, api) => {
  try {
    const {data} = await api.get(APIRoutes.LOGIN);
    dispatch(actionCreator.requireAuthorization(AuthorizationStatus.AUTH));
    dispatch(actionCreator.getLoginSuccess(data));
  } catch {
    dispatch(actionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
  }
};

const login = ({login: email, password}) => async (dispatch, _, api) => {
  dispatch(actionCreator.getLoginRequest());
  try {
    const {data} = await api.post(APIRoutes.LOGIN, {email, password});
    localStorage.setItem('token', data.token);
    dispatch(actionCreator.requireAuthorization(AuthorizationStatus.AUTH));
    dispatch(actionCreator.getLoginSuccess(data));
    dispatch(actionCreator.redirectToRoute(AppRoutes.MAIN));
  } catch {
    dispatch(actionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
    dispatch(actionCreator.getLoginError());
  }
};

const logout = () => async (dispatch, _, api) => {
  dispatch(actionCreator.logoutRequest());
  try {
    await api.delete(APIRoutes.LOGOUT);
    localStorage.removeItem('token');
    dispatch(actionCreator.logoutSuccess(AuthorizationStatus.NO_AUTH));
  } catch {
    dispatch(actionCreator.logoutError());
  }
};

const getComments = (id) => async (dispatch, _, api) => {
  const {data} = await api.get(`/comments/${id}`);
  dispatch(actionCreator.loadCommentsSuccess(data));
};

export {
  fetchOffersList,
  checkAuth,
  login,
  logout,
  getComments
};
