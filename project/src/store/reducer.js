import {ActionsType} from './actions.js';
import {AuthorizationStatus} from '../const.js';
import {adaptToClient} from '../utils.js';

const initialState = {
  city: 'Paris',
  offers: [],
  sort: 'Popular',
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  isDataLoaded: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionsType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case ActionsType.CHANGE_SORT:
      return {
        ...state,
        sort: action.payload,
      };
    case ActionsType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload.map((offer)=> adaptToClient(offer)),
        isDataLoaded: true,
      };
    case ActionsType.LOGOUT:
      return {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    case ActionsType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
