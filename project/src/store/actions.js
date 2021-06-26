const ActionsType ={
  CHANGE_CITY: 'main/cityChange',
  CHANGE_SORT: 'sort/sortChange',
  GET_CURRENT_OFFERS: 'sort/getCurrentOffers',
  LOAD_OFFERS: 'data/loadOffers',
  LOGOUT: 'logout',
  REQUIRED_AUTHORIZATION: 'requiredAuthorization',
};

const actionCreator = {
  changeCity: (city) => ({
    type: ActionsType.CHANGE_CITY,
    payload: city,
  }),
  changeSort: (sort)=> ({
    type: ActionsType.CHANGE_SORT,
    payload: sort,
  }),
  loadOffers: (offers)=> ({
    type: ActionsType.LOAD_OFFERS,
    payload: offers,
  }),
  logout: ()=> ({
    type: ActionsType.LOGOUT,
  }),
  requireAuthorization: (status) => ({
    type: ActionsType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
};


export {ActionsType, actionCreator};
