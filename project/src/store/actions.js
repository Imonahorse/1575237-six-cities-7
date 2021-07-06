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
  NEAR_PLACES_OFFERS_REQUEST: 'data/offerNearPlacesRequest',
  NEAR_PLACES_OFFERS_SUCCESS: 'data/offerNearPlacesSuccess',
  NEAR_PLACES_OFFERS_ERROR: 'data/offerNearPlacesSuccess',
  GET_COMMENTS_REQUEST: 'data/getCommentsRequest',
  GET_COMMENTS_SUCCESS: 'data/getCommentsSuccess',
  GET_COMMENTS_ERROR: 'data/getCommentsError',
  SET_COMMENT_REQUEST: 'data/setCommentRequest',
  SET_COMMENT_SUCCESS: 'data/setCommentSuccess',
  SET_COMMENT_ERROR: 'data/setCommentError',
};

export const redirectToNotFoundPage = (url) => ({
  type: ActionsType.REDIRECT_TO_NOT_FOUND,
  payload: url,
});

export const setCommentSuccess = (answer) => ({
  type: ActionsType.SET_COMMENT_SUCCESS,
  payload: answer,
});

export const setCommentRequest = () => ({
  type: ActionsType.SET_COMMENT_REQUEST,
});

export const setCommentError = () => ({
  type: ActionsType.SET_COMMENT_ERROR,
});

export const changeCity = (city) => ({
  type: ActionsType.CHANGE_CITY,
  payload: city,
});

export const changeSort = (sort) => ({
  type: ActionsType.CHANGE_SORT,
  payload: sort,
});

export const requireAuthorization = (status) => ({
  type: ActionsType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const redirectToRoute = (url) => ({
  type: ActionsType.REDIRECT_TO_ROUTE,
  payload: url,
});

export const getCommentsRequest = () => ({
  type: ActionsType.GET_COMMENTS_REQUEST,
});

export const getCommentsSuccess = (comments) => ({
  type: ActionsType.GET_COMMENTS_SUCCESS,
  payload: comments,
});

export const getCommentsError = () => ({
  type: ActionsType.GET_COMMENTS_ERROR,
});

export const nearPlacesOffersRequest = () => ({
  type: ActionsType.NEAR_PLACES_OFFERS_REQUEST,
});

export const nearPlacesOffersSuccess = (offers) => ({
  type: ActionsType.NEAR_PLACES_OFFERS_SUCCESS,
  payload: offers,
});

export const nearPlacesOffersError = () => ({
  type: ActionsType.NEAR_PLACES_OFFERS_ERROR,
});

export const loadOfferSuccess = (offer) => ({
  type: ActionsType.LOAD_OFFER_SUCCESS,
  payload: offer,
});

export const loadOfferRequest = () => ({
  type: ActionsType.LOAD_OFFER_REQUEST,
});

export const loadOfferError = () => ({
  type: ActionsType.LOAD_OFFER_ERROR,
});

export const getLoginSuccess = (login) => ({
  type: ActionsType.GET_LOGIN_SUCCESS,
  payload: login,
});

export const getLoginError = () => ({
  type: ActionsType.GET_LOGIN_ERROR,
});

export const getLoginRequest = () => ({
  type: ActionsType.GET_LOGIN_REQUEST,
});

export const loadOffersSuccess = (offers) => ({
  type: ActionsType.LOAD_OFFERS_SUCCESS,
  payload: offers,
});

export const loadOffersError = () => ({
  type: ActionsType.LOAD_OFFERS_ERROR,
});

export const loadOffersRequest = () => ({
  type: ActionsType.LOAD_OFFERS_REQUEST,
});

export const logoutSuccess = (status) => ({
  type: ActionsType.LOGOUT_SUCCESS,
  payload: status,
});

export const logoutError = () => ({
  type: ActionsType.LOGOUT_ERROR,
});

export const logoutRequest = () => ({
  type: ActionsType.LOGOUT_REQUEST,
});
