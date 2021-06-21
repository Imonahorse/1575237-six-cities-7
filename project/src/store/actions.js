const ActionsType ={
  CITY_CHANGE: 'main/cityChange',
  GET_OFFERS: 'main/getOffers',
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
};


export {ActionsType, actionCreator};
