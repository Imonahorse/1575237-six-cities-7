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
  commentsStatus: {
    isSuccess: false,
    isError: false,
    isLoading: false,
  },
  loginStatus: {
    isSuccess: false,
    isError: false,
    isLoading: false,
  },
  logoutStatus: {
    isSuccess: false,
    isError: false,
    isLoading: false,
  },
  user: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionsType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case ActionsType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionsType.GET_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loginStatus: {
          ...state.loginStatus,
          isSuccess: true,
          isLoading: false,
          isError: false,
        },
        logoutStatus: {
          ...state.logoutStatus,
          isSuccess: false,
        },
      };
    case ActionsType.LOGOUT_SUCCESS:
      return{
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        logoutStatus: {
          ...state.logoutStatus,
          isSuccess: true,
          isLoading: false,
          isError: false,
        },
        loginStatus: {
          ...state.loginStatus,
          isSuccess: false,
        },
      };
    case ActionsType.LOGOUT_ERROR:
      return{
        ...state,
        logoutStatus: {
          isSuccess: false,
          isError: true,
          isLoading: false,
        },
      };
    case ActionsType.LOGOUT_REQUEST:
      return{
        ...state,
        logoutStatus: {
          ...state.logoutStatus,
          isLoading: true,
        },
      };
    case ActionsType.GET_LOGIN_REQUEST:
      return {
        ...state,
        loginStatus: {
          ...state.loginStatus,
          isLoading: true,
        },
      };
    case ActionsType.GET_LOGIN_ERROR:
      return {
        ...state,
        loginStatus: {
          ...state.loginStatus,
          isError: true,
          isLoading: false,
        },
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
    case ActionsType.LOAD_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.payload,
        offerStatus: {
          ...state.commentsStatus,
          isSuccess: true,
          isLoading: false,
        },
      };
    default:
      return state;
  }
};

export default reducer;
