import {ActionsType} from '../../actions.js';
import {AuthorizationStatus} from '../../../const.js';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  loginStatus: {
    isSuccess: false,
    isError: false,
    isLoading: false,
  },
  user: '',
  logoutStatus: {
    isSuccess: false,
    isError: false,
    isLoading: false,
  },
};

const userData = (state = initialState, action) => {
  switch (action.type) {
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
    case ActionsType.LOGOUT_SUCCESS:
      return {
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
      return {
        ...state,
        logoutStatus: {
          isSuccess: false,
          isError: true,
          isLoading: false,
        },
      };
    case ActionsType.LOGOUT_REQUEST:
      return {
        ...state,
        logoutStatus: {
          ...state.logoutStatus,
          isLoading: true,
        },
      };
    default:
      return state;
  }
};

export default userData;
