const ActionsType ={
  CHANGE_CITY: 'main/cityChange',
  GET_OFFERS: 'main/getOffers',
  CHANGE_SORT: 'sort/sortChange',
  GET_CURRENT_OFFERS: 'sort/getCurrentOffers',
};

const actionCreator = {
  changeCity: (city) => ({
    type: ActionsType.CHANGE_CITY,
    payload: city,
  }),
  getOffers: (offers)=> ({
    type: ActionsType.GET_OFFERS,
    payload: offers,
  }),
  changeSort: (sort)=> ({
    type: ActionsType.CHANGE_SORT,
    payload: sort,
  }),
};


export {ActionsType, actionCreator};
