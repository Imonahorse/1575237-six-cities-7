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
    dispatch(actionCreator.getLogin(data.email));
  } catch {
    dispatch(actionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
  }
};

const login = ({login: email, password}) => async (dispatch, _, api) => {
  try {
    const {data} = await api.post(APIRoutes.LOGIN, {email, password});
    localStorage.setItem('token', data.token);
    dispatch(actionCreator.requireAuthorization(AuthorizationStatus.AUTH));
    dispatch(actionCreator.redirectToRoute(AppRoutes.MAIN));
  } catch {
    dispatch(actionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
  }
};

const logout = () => async (dispatch, _, api) => {
  await api.delete(APIRoutes.LOGOUT);
  localStorage.removeItem('token');
  dispatch(actionCreator.logout(AuthorizationStatus.NO_AUTH));
};

const getComments = (id=1) => async (dispatch, _, api) => {
  const comments = await api.get(`/comments/${id}`);
  dispatch(actionCreator.loadCommentsSuccess(comments));
};

export {
  fetchOffersList,
  checkAuth,
  login,
  logout,
  getComments
};
