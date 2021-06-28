const ActionsType = {
  CHANGE_CITY: 'main/cityChange',
  CHANGE_SORT: 'sort/sortChange',
  GET_CURRENT_OFFERS: 'data/getCurrentOffers',
  LOAD_OFFERS_SUCCESS: 'data/loadOffersSuccess',
  LOAD_OFFERS_ERROR: 'data/loadOffersError',
  LOAD_OFFERS_REQUEST: 'data/loadOffersRequest',
  LOAD_COMMENTS_SUCCESS: 'data/loadCommentsSuccess',
  LOAD_COMMENTS_ERROR: 'data/loadCommentsError',
  LOAD_COMMENTS_REQUEST: 'data/loadCommentsRequest',
  LOGOUT: 'data/logout',
  REQUIRED_AUTHORIZATION: 'requiredAuthorization',
  REDIRECT_TO_ROUTE: 'login/redirectToRoute',
  GET_LOGIN: 'login/getLogin',
};

const actionCreator = {
  changeCity: (city) => ({
    type: ActionsType.CHANGE_CITY,
    payload: city,
  }),
  getLogin: (login) => ({
    type: ActionsType.GET_LOGIN,
    payload: login,
  }),
  changeSort: (sort) => ({
    type: ActionsType.CHANGE_SORT,
    payload: sort,
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
  logout: (status) => ({
    type: ActionsType.LOGOUT,
    payload: status,
  }),
  requireAuthorization: (status) => ({
    type: ActionsType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  redirectToRoute: (url) => ({
    type: ActionsType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
};


export {ActionsType, actionCreator};
