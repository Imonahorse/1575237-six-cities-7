import {actionCreator} from './actions.js';
import {AuthorizationStatus, APIRoutes, AppRoutes} from '../const.js';
import {adaptToClient} from '../utils.js';

const NOT_FOUNR_ERROR = 'Request failed with status code 404';

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

const getOffer = (id) => async (dispatch, _, api) => {
  try {
    dispatch(actionCreator.loadOfferRequest());
    const {data} = await api.get(`/hotels/${id}`);
    const adaptedData = adaptToClient(data);
    dispatch(actionCreator.loadOfferSuccess(adaptedData));
  } catch(err) {
    if(err.message === NOT_FOUNR_ERROR) {
      dispatch(actionCreator.redirectToRoute(AppRoutes.NOT_FOUND));
    }
    // dispatch(actionCreator.loadOfferError());
  }
};

const getNearPlacesOffers = (id) => async (dispatch, _, api) => {
  try {
    dispatch(actionCreator.nearPlacesOffersRequest());
    const {data} = await api.get(`/hotels/${id}/nearby`);
    const adaptedData = data.map((offer) => adaptToClient(offer));
    dispatch(actionCreator.nearPlacesOffersSuccess(adaptedData));
  } catch {
    dispatch(actionCreator.nearPlacesOffersError());
  }
};

const getComments = (id) => async (dispatch, _, api) => {
  try {
    dispatch(actionCreator.getCommentsRequest());
    const {data} = await api.get(`/comments/${id}`);
    dispatch(actionCreator.getCommentsSuccess(data));
  } catch {
    dispatch(actionCreator.getCommentsError());
  }
};

const setComment = (pageId, body) => async (dispatch, _, api) => {
  dispatch(actionCreator.setCommentRequest());
  try {
    const {data} = await api.post(`/comments/${pageId}`, body);
    dispatch(actionCreator.setCommentSuccess(data));
  } catch {
    dispatch(actionCreator.setCommentError());
  }
};

export {
  fetchOffersList,
  checkAuth,
  login,
  logout,
  getOffer,
  getNearPlacesOffers,
  getComments,
  setComment
};
