import {
  loadOffersRequest,
  loadOffersSuccess,
  loadOffersError,
  requiredAuthorization,
  getLoginRequest,
  getLoginSuccess,
  getLoginError,
  redirectToRoute,
  logoutRequest,
  logoutSuccess,
  logoutError,
  loadOfferRequest,
  loadOfferSuccess,
  loadOfferError,
  nearPlacesOffersRequest,
  nearPlacesOffersSuccess,
  nearPlacesOffersError,
  getCommentsRequest,
  getCommentsSuccess,
  getCommentsError,
  setCommentRequest,
  setCommentSuccess,
  setCommentError,
  fetchFavoriteRequest,
  fetchFavoriteSuccess,
  fetchFavoriteError,
  setFavoriteRequest,
  setFavoriteSuccess,
  setFavoriteError
} from './actions.js';
import {AuthorizationStatus, APIRoutes, AppRoutes} from '../../const.js';
import {adaptToClient} from '../../utils.js';

const NOT_FOUND_ERROR = 'Request failed with status code 404';

const fetchOffersList = () => async (dispatch, _, api) => {
  dispatch(loadOffersRequest());
  try {
    const {data} = await api.get(APIRoutes.OFFERS);
    const adaptedData = data.map((offer) => adaptToClient(offer));
    dispatch(loadOffersSuccess(adaptedData));
  } catch {
    dispatch(loadOffersError());
  }
};

const checkAuth = () => async (dispatch, _, api) => {
  try {
    const {data} = await api.get(APIRoutes.LOGIN);
    dispatch(requiredAuthorization(AuthorizationStatus.AUTH));
    dispatch(getLoginSuccess(data));
  } catch {
    dispatch(requiredAuthorization(AuthorizationStatus.NO_AUTH));
  }
};

const login = ({login: email, password}) => async (dispatch, _, api) => {
  dispatch(getLoginRequest());
  try {
    const {data} = await api.post(APIRoutes.LOGIN, {email, password});
    localStorage.setItem('token', data.token);
    dispatch(requiredAuthorization(AuthorizationStatus.AUTH));
    dispatch(getLoginSuccess(data));
    dispatch(redirectToRoute(AppRoutes.MAIN));
  } catch {
    dispatch(requiredAuthorization(AuthorizationStatus.NO_AUTH));
    dispatch(getLoginError());
  }
};

const logout = () => async (dispatch, _, api) => {
  dispatch(logoutRequest());
  try {
    await api.delete(APIRoutes.LOGOUT);
    localStorage.removeItem('token');
    dispatch(logoutSuccess(AuthorizationStatus.NO_AUTH));
  } catch {
    dispatch(logoutError());
  }
};

const fetchOffer = (id) => async (dispatch, _, api) => {
  dispatch(loadOfferRequest());
  try {
    const {data} = await api.get(`/hotels/${id}`);
    const adaptedData = adaptToClient(data);
    dispatch(loadOfferSuccess(adaptedData));
  } catch(err) {
    if(err.message === NOT_FOUND_ERROR) {
      dispatch(redirectToRoute(AppRoutes.NOT_FOUND));
    }
    dispatch(loadOfferError());
  }
};

const fetchNearPlacesOffers = (id) => async (dispatch, _, api) => {
  dispatch(nearPlacesOffersRequest());
  try {
    const {data} = await api.get(`/hotels/${id}/nearby`);
    const adaptedData = data.map((offer) => adaptToClient(offer));
    dispatch(nearPlacesOffersSuccess(adaptedData));
  } catch {
    dispatch(nearPlacesOffersError());
  }
};

const fetchComments = (id) => async (dispatch, _, api) => {
  dispatch(getCommentsRequest());
  try {
    const {data} = await api.get(`/comments/${id}`);
    dispatch(getCommentsSuccess(data));
  } catch {
    dispatch(getCommentsError());
  }
};

const setComment = (pageId, body) => async (dispatch, _, api) => {
  dispatch(setCommentRequest());
  try {
    const {data} = await api.post(`/comments/${pageId}`, body);
    dispatch(setCommentSuccess(data));
  } catch {
    dispatch(setCommentError());
  }
};

const fetchFavorite = () => async(dispatch, _, api) => {
  dispatch(fetchFavoriteRequest());
  try {
    const {data} = await api.get('/favorite');
    const adaptedData = data.map((item) => adaptToClient(item));
    dispatch(fetchFavoriteSuccess(adaptedData));
  } catch {
    dispatch(fetchFavoriteError());
  }
};

const setFavorite = (id, status) => async(dispatch, _, api) => {
  dispatch(setFavoriteRequest());
  try {
    const {data} = await api.post(`/favorite/${id}/${status}`);
    const adaptedData = adaptToClient(data);
    dispatch(setFavoriteSuccess(adaptedData));
  } catch {
    dispatch(setFavoriteError());
  }
};

export {
  fetchOffersList,
  checkAuth,
  login,
  logout,
  fetchOffer,
  fetchNearPlacesOffers,
  fetchComments,
  setComment,
  fetchFavorite,
  setFavorite
};
