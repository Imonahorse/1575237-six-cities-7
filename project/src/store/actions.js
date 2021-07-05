const ActionsType = {
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

const actionCreator = {
  redirectToNotFoundPage: (url) => ({
    type: ActionsType.REDIRECT_TO_NOT_FOUND,
    payload: url,
  }),
  setCommentSuccess: (answer)=> ({
    type: ActionsType.SET_COMMENT_SUCCESS,
    payload: answer,
  }),
  setCommentRequest: ()=> ({
    type: ActionsType.SET_COMMENT_REQUEST,
  }),
  setCommentError: ()=> ({
    type: ActionsType.SET_COMMENT_ERROR,
  }),
  changeCity: (city) => ({
    type: ActionsType.CHANGE_CITY,
    payload: city,
  }),
  changeSort: (sort) => ({
    type: ActionsType.CHANGE_SORT,
    payload: sort,
  }),
  requireAuthorization: (status) => ({
    type: ActionsType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  redirectToRoute: (url) => ({
    type: ActionsType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
  getCommentsRequest: () => ({
    type: ActionsType.GET_COMMENTS_REQUEST,
  }),
  getCommentsSuccess: (comments) => ({
    type: ActionsType.GET_COMMENTS_SUCCESS,
    payload: comments,
  }),
  getCommentsError: () => ({
    type: ActionsType.GET_COMMENTS_ERROR,
  }),
  nearPlacesOffersRequest: () => ({
    type: ActionsType.NEAR_PLACES_OFFERS_REQUEST,
  }),
  nearPlacesOffersSuccess: (offers) => ({
    type: ActionsType.NEAR_PLACES_OFFERS_SUCCESS,
    payload: offers,
  }),
  nearPlacesOffersError: () => ({
    type: ActionsType.NEAR_PLACES_OFFERS_ERROR,
  }),
  loadOfferSuccess: (offer) => ({
    type: ActionsType.LOAD_OFFER_SUCCESS,
    payload: offer,
  }),
  loadOfferRequest: () => ({
    type: ActionsType.LOAD_OFFER_REQUEST,
  }),
  loadOfferError: () => ({
    type: ActionsType.LOAD_OFFER_ERROR,
  }),
  getLoginSuccess: (login) => ({
    type: ActionsType.GET_LOGIN_SUCCESS,
    payload: login,
  }),
  getLoginError: () => ({
    type: ActionsType.GET_LOGIN_ERROR,
  }),
  getLoginRequest: () => ({
    type: ActionsType.GET_LOGIN_REQUEST,
  }),
  loadOffersSuccess: (offers) => ({
    type: ActionsType.LOAD_OFFERS_SUCCESS,
    payload: offers,
  }),
  loadOffersError: () => ({
    type: ActionsType.LOAD_OFFERS_ERROR,
  }),
  loadOffersRequest: () => ({
    type: ActionsType.LOAD_OFFERS_REQUEST,
  }),
  logoutSuccess: (status) => ({
    type: ActionsType.LOGOUT_SUCCESS,
    payload: status,
  }),
  logoutError: () => ({
    type: ActionsType.LOGOUT_ERROR,
  }),
  logoutRequest: () => ({
    type: ActionsType.LOGOUT_REQUEST,
  }),
};


export {ActionsType, actionCreator};
