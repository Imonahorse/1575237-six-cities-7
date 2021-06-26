const ActionsType = {
  CHANGE_CITY: 'main/cityChange',
  CHANGE_SORT: 'sort/sortChange',
  GET_CURRENT_OFFERS: 'sort/getCurrentOffers',
  LOAD_OFFERS_SUCCESS: 'data/loadOffersSuccess',
  LOAD_OFFERS_ERROR: 'data/loadOffersError',
  LOAD_OFFERS_REQUEST: 'data/loadOffersRequest',
  LOGOUT: 'logout',
  REQUIRED_AUTHORIZATION: 'requiredAuthorization',
};

const actionCreator = {
  changeCity: (city) => ({
    type: ActionsType.CHANGE_CITY,
    payload: city,
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
  logout: (status) => ({
    type: ActionsType.LOGOUT,
    payload: status,
  }),
  requireAuthorization: (status) => ({
    type: ActionsType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
};


export {ActionsType, actionCreator};
