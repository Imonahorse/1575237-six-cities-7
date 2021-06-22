const ActionsType ={
  CITY_CHANGE: 'main/cityChange',
  GET_OFFERS: 'main/getOffers',
  SORT_CHANGE: 'sort/sortChange',
};

const actionCreator = {
  cityChange: (city) => ({
    type: ActionsType.CITY_CHANGE,
    payload: city,
  }),
  getOffers: (offers)=> ({
    type: ActionsType.GET_OFFERS,
    payload: offers,
  }),
  sortChange: (sort)=> ({
    type: ActionsType.SORT_CHANGE,
    payload: sort,
  }),
};


export {ActionsType, actionCreator};
