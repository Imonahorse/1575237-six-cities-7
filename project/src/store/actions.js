const ActionsType = {
  CHANGE_CITY: 'main/cityChange',
  CHANGE_SORT: 'sort/sortChange',
  REQUIRED_AUTHORIZATION: 'requiredAuthorization',
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
  OFFER_REQUEST: 'offer/offerRequest',
};

const actionCreator = {
  loadOfferSuccess: (offer) => ({
    type: ActionsType.LOAD_OFFER_SUCCESS,
    payload: offer,
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
  loadCommentsSuccess: (offers) => ({
    type: ActionsType.LOAD_COMMENTS_SUCCESS,
    payload: offers,
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
  offerRequest: () => ({
    type: ActionsType.OFFER_REQUEST,
  })
};


export {ActionsType, actionCreator};
