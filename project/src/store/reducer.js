import {ActionsType} from './actions.js';
import {AuthorizationStatus} from '../const.js';

const initialState = {
  city: 'Paris',
  offers: [],
  comments: [],
  sort: 'Popular',
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  offerStatus: {
    isSuccess: false,
    isError: false,
    isLoading: false,
  },
  commentsState: {
    isSuccess: false,
    isError: false,
    isLoading: false,
  },
  login: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionsType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case ActionsType.GET_LOGIN:
      return {
        ...state,
        login: action.payload,
      };
    case ActionsType.CHANGE_SORT:
      return {
        ...state,
        sort: action.payload,
      };
    case ActionsType.LOAD_OFFERS_SUCCESS:
      return {
        ...state,
        offers: action.payload,
        offerStatus: {
          ...state.offerStatus,
          isSuccess: true,
          isLoading: false,
        },
      };
    case ActionsType.LOAD_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.payload,
        offerStatus: {
          ...state.offerStatus,
          isSuccess: true,
          isLoading: false,
        },
      };
    case ActionsType.LOAD_OFFERS_REQUEST:
      return {
        ...state,
        offerStatus: {
          ...state.offerStatus,
          isLoading: true,
        },
      };
    case ActionsType.LOAD_OFFERS_ERROR:
      return {
        ...state,
        offerStatus: {
          ...state.offerStatus,
          isError: true,
          isLoading: false,
        },
      };
    case ActionsType.LOGOUT:
      return {
        ...state,
        authorizationStatus: action.payload,
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
