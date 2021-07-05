import {ActionsType} from './actions.js';
import {AuthorizationStatus} from '../const.js';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  loginStatus: {
    isSuccess: false,
    isError: false,
    isLoading: false,
  },
  city: 'Paris',
  sort: 'Popular',
  user: '',
  logoutStatus: {
    isSuccess: false,
    isError: false,
    isLoading: false,
  },
  offers: [],
  offersStatus: {
    isSuccess: false,
    isError: false,
    isLoading: false,
  },
  comments: [],
  commentsStatus: {
    isSuccess: false,
    isError: false,
    isLoading: false,
  },
  offer: {},
  offerStatus: {
    isSuccess: false,
    isError: false,
    isLoading: true,
  },
  nearPlacesOffers: [],
  nearPlacesOffersStatus: {
    isSuccess: false,
    isError: false,
    isLoading: true,
  },
  commentStatus: {
    isSuccess: false,
    isError: false,
    isLoading: false,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionsType.SET_COMMENT_SUCCESS:
      return {
        ...state,
        comments: action.payload,
        commentStatus: {
          ...state.commentStatus,
          isSuccess: true,
          isLoading: false,
          isError: false,
        },
      };
    case ActionsType.SET_COMMENT_REQUEST:
      return {
        ...state,
        commentStatus: {
          ...state.commentStatus,
          isSuccess: false,
          isLoading: true,
          isError: false,
        },
      };
    case ActionsType.SET_COMMENT_ERROR:
      return {
        ...state,
        commentStatus: {
          ...state.commentStatus,
          isSuccess: false,
          isLoading: false,
          isError: true,
        },
      };
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
    case ActionsType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionsType.GET_COMMENTS_REQUEST:
      return {
        ...state,
        commentsStatus: {
          ...state.commentsStatus,
          isLoading: true,
        },
      };
    case ActionsType.GET_COMMENTS_SUCCESS:
      return {
        ...state,
        commentsStatus: {
          ...state.commentsStatus,
          isLoading: false,
          isSuccess: true,
        },
        comments: action.payload,
      };
    case ActionsType.GET_COMMENTS_ERROR:
      return {
        ...state,
        commentsStatus: {
          ...state.commentsStatus,
          isLoading: false,
          isSuccess: false,
          isError: true,
        },
        comments: [],
      };
    case ActionsType.NEAR_PLACES_OFFERS_REQUEST:
      return {
        ...state,
        nearPlacesOffersStatus: {
          ...state.nearPlacesOffersStatus,
          isLoading: true,
        },
      };
    case ActionsType.NEAR_PLACES_OFFERS_SUCCESS:
      return {
        ...state,
        nearPlacesOffersStatus: {
          ...state.nearPlacesOffersStatus,
          isLoading: false,
          isSuccess: true,
        },
        nearPlacesOffers: action.payload,
      };
    case ActionsType.NEAR_PLACES_OFFERS_ERROR:
      return {
        ...state,
        nearPlacesOffersStatus: {
          ...state.nearPlacesOffersStatus,
          isLoading: false,
          isSuccess: false,
          isError: true,
        },
        nearPlacesOffers: action.payload,
      };
    case ActionsType.LOAD_OFFER_SUCCESS:
      return {
        ...state,
        offerStatus: {
          ...state.offerStatus,
          isLoading: false,
          isSuccess: true,
          isError: false,
        },
        offer: action.payload,
      };
    case ActionsType.LOAD_OFFER_REQUEST:
      return {
        ...state,
        offerStatus: {
          ...state.offerStatus,
          isLoading: true,
          isError: false,
          isSuccess: false,
        },
      };
    case ActionsType.LOAD_OFFER_ERROR:
      return {
        ...state,
        offerStatus: {
          ...state.offerStatus,
          isLoading: true,
          isSuccess: false,
          isError: true,
        },
        offer: {},
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
    case ActionsType.LOAD_OFFERS_SUCCESS:
      return {
        ...state,
        offers: action.payload,
        offersStatus: {
          ...state.offersStatus,
          isSuccess: true,
          isLoading: false,
        },
      };
    case ActionsType.LOAD_OFFERS_REQUEST:
      return {
        ...state,
        offersStatus: {
          ...state.offersStatus,
          isLoading: true,
        },
      };
    case ActionsType.LOAD_OFFERS_ERROR:
      return {
        ...state,
        offersStatus: {
          ...state.offersStatus,
          isError: true,
          isLoading: false,
        },
      };
    case ActionsType.LOAD_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.payload,
        offersStatus: {
          ...state.commentsStatus,
          isSuccess: true,
          isLoading: false,
        },
      };
    case ActionsType.LOAD_COMMENTS_REQUEST:
      return {
        ...state,
        offersStatus: {
          ...state.offersStatus,
          isLoading: true,
        },
      };
    case ActionsType.LOAD_COMMENTS_ERROR:
      return {
        ...state,
        offersStatus: {
          ...state.offersStatus,
          isLoading: false,
          isSuccess: false,
          isError: true,
        },
        comments: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
