import {createAction} from '@reduxjs/toolkit';

export const ActionsType = {
  CHANGE_CITY: 'main/cityChange',
  CHANGE_SORT: 'sort/sortChange',
  REQUIRED_AUTHORIZATION: 'requiredAuthorization',
  REDIRECT_TO_NOT_FOUND: 'offer/redirectToNotFoundPage',
  REDIRECT_TO_ROUTE: 'login/redirectToRoute',
  LOAD_OFFERS_SUCCESS: 'data/loadOffersSuccess',
  LOAD_OFFERS_ERROR: 'data/loadOffersError',
  LOAD_OFFERS_REQUEST: 'data/loadOffersRequest',
  LOAD_COMMENTS_SUCCESS: 'data/loadCommentsSuccess',
  LOAD_COMMENTS_ERROR: 'data/loadCommentsError',
  LOAD_COMMENTS_REQUEST: 'data/loadCommentsRequest',
  LOGOUT_SUCCESS: 'data/logoutSuccess',
  LOGOUT_ERROR: 'data/logoutError',
  LOGOUT_REQUEST: 'data/logoutRequest',
  GET_LOGIN_SUCCESS: 'login/getLoginSuccess',
  GET_LOGIN_ERROR: 'login/getLoginError',
  GET_LOGIN_REQUEST: 'login/getLoginRequest',
  LOAD_OFFER_SUCCESS: 'offer/loadOfferSuccess',
  LOAD_OFFER_REQUEST: 'offer/offerRequest',
  LOAD_OFFER_ERROR: 'offer/offerError',
  NEAR_PLACES_OFFERS_REQUEST: 'data/nearPlacesOffersRequest',
  NEAR_PLACES_OFFERS_SUCCESS: 'data/nearPlacesOffersSuccess',
  NEAR_PLACES_OFFERS_ERROR: 'data/nearPlacesOffersError',
  GET_COMMENTS_REQUEST: 'data/getCommentsRequest',
  GET_COMMENTS_SUCCESS: 'data/getCommentsSuccess',
  GET_COMMENTS_ERROR: 'data/getCommentsError',
  SET_COMMENT_REQUEST: 'data/setCommentRequest',
  SET_COMMENT_SUCCESS: 'data/setCommentSuccess',
  SET_COMMENT_ERROR: 'data/setCommentError',
  FETCH_FAVORITE_REQUEST: 'data/fetchFavoriteRequest',
  FETCH_FAVORITE_SUCCESS: 'data/fetchFavoriteSuccess',
  FETCH_FAVORITE_ERROR: 'data/fetchFavoriteError',
  SET_FAVORITE_REQUEST: 'data/setFavoriteRequest',
  SET_FAVORITE_SUCCESS: 'data/setFavoriteSuccess',
  SET_FAVORITE_ERROR: 'data/setFavoriteError',
};

export const setFavoriteRequest = createAction(ActionsType.SET_FAVORITE_REQUEST);

export const setFavoriteSuccess = createAction(ActionsType.SET_FAVORITE_SUCCESS, (answer) => ({
  payload: answer,
}));

export const setFavoriteError = createAction(ActionsType.SET_FAVORITE_ERROR);

export const fetchFavoriteRequest = createAction(ActionsType.FETCH_FAVORITE_REQUEST);

export const fetchFavoriteSuccess = createAction(ActionsType.FETCH_FAVORITE_SUCCESS, (favorite) => ({
  payload: favorite,
}));

export const fetchFavoriteError = createAction(ActionsType.FETCH_FAVORITE_ERROR);

export const setCommentSuccess = createAction(ActionsType.SET_COMMENT_SUCCESS, (answer) => ({
  payload: answer,
}));

export const setCommentRequest = createAction(ActionsType.SET_COMMENT_REQUEST);

export const setCommentError = createAction(ActionsType.SET_COMMENT_ERROR);

export const changeCity = createAction(ActionsType.CHANGE_CITY, (city) => ({
  payload: city,
}));

export const changeSort = createAction(ActionsType.CHANGE_SORT, (sort) => ({
  payload: sort,
}));

export const requiredAuthorization = createAction(ActionsType.REQUIRED_AUTHORIZATION, (status) => ({
  payload: status,
}));

export const redirectToRoute = createAction(ActionsType.REDIRECT_TO_ROUTE, (url) => ({
  payload: url,
}));

export const getCommentsRequest = createAction(ActionsType.GET_COMMENTS_REQUEST);

export const getCommentsSuccess = createAction(ActionsType.GET_COMMENTS_SUCCESS, (comments) => ({
  payload: comments,
}));

export const getCommentsError = createAction(ActionsType.GET_COMMENTS_ERROR);

export const nearPlacesOffersRequest = createAction(ActionsType.NEAR_PLACES_OFFERS_REQUEST);

export const nearPlacesOffersSuccess = createAction(ActionsType.NEAR_PLACES_OFFERS_SUCCESS, (offers) => ({
  payload: offers,
}));

export const nearPlacesOffersError = createAction(ActionsType.NEAR_PLACES_OFFERS_ERROR);

export const loadOfferSuccess = createAction(ActionsType.LOAD_OFFER_SUCCESS, (offer) => ({
  payload: offer,
}));

export const loadOfferRequest = createAction(ActionsType.LOAD_OFFER_REQUEST);

export const loadOfferError = createAction(ActionsType.LOAD_OFFER_ERROR);

export const getLoginSuccess = createAction(ActionsType.GET_LOGIN_SUCCESS, (login) => ({
  payload: login,
}));

export const getLoginError = createAction(ActionsType.GET_LOGIN_ERROR);

export const getLoginRequest = createAction(ActionsType.GET_LOGIN_REQUEST);

export const loadOffersSuccess = createAction(ActionsType.LOAD_OFFERS_SUCCESS, (offers) => ({
  payload: offers,
}));

export const loadOffersError = createAction(ActionsType.LOAD_OFFERS_ERROR);

export const loadOffersRequest = createAction(ActionsType.LOAD_OFFERS_REQUEST);

export const logoutSuccess = createAction(ActionsType.LOGOUT_SUCCESS, (status) => ({
  payload: status,
}));

export const logoutError = createAction(ActionsType.LOGOUT_ERROR);

export const logoutRequest = createAction(ActionsType.LOGOUT_REQUEST);
