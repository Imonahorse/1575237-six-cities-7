import {ActionsType} from './actions.js';

const initialState ={
  city: 'Amsterdam',
  offers: [],
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ActionsType.CITY_CHANGE:
      return {
        ...state,
        city: state.city,
      }
    case ActionsType.GET_OFFERS:
      return {
        ...state,
        offers: state.offers,
      }
  }
}

export default reducer;
