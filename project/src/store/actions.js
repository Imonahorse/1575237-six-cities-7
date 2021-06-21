const ActionsType ={
  CITY_CHANGE: 'City change',
  GET_OFFERS: 'Get Offers',
}

const actionCreator = {
  cityChange: () => ({
    type: ActionsType.CITY_CHANGE
  }),
  getOffers: ()=> ({
    type: ActionsType.GET_OFFERS
  }),
}


export {ActionsType, actionCreator};
