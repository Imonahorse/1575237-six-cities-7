import {ActionsType} from './actions.js';
import {createOffers} from '../mocks/offers.js';

const offers = createOffers();

const initialState ={
  city: 'Paris',
  offers: offers,
  sort: 'Popular',
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ActionsType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case ActionsType.GET_OFFERS:
      return {
        ...state,
        offers: action.payload,
      };
    case ActionsType.CHANGE_SORT:
      return {
        ...state,
        sort: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
