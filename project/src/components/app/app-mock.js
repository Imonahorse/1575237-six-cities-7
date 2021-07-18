import {AuthorizationStatus} from '../../const.js';
import {createFakeOffer, createFakeOffersArray} from '../favorites-city/favorites-city-mock.js';
import {createFakeCommentArray} from '../comment/comment-mock.js';

const fakeStore = {
  USER: {
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    logoutStatus: { isSuccess: false, isLoading: false, isError: false},
    loginStatus: { isSuccess: false, isLoading: false, isError: false},
    favoriteStatus: { isSuccess: false, isLoading: false, isError: false},
    setFavoriteStatus: { isSuccess: false, isLoading: false, isError: false},
  },
  APP: {
    city: 'Paris',
  },
  DATA: {
    offers: createFakeOffersArray(5),
    offer: createFakeOffer(3),
    offerStatus: { isSuccess: false, isLoading: false, isError: false},
    comments: createFakeCommentArray(5),
    nearPlacesOffersStatus: { isSuccess: false, isLoading: false, isError: false},
    nearPlacesOffers: createFakeOffersArray(5),
    commentsStatus: { isSuccess: false, isLoading: false, isError: false},
    offersStatus: { isSuccess: false, isLoading: false, isError: false},
  },
};

export {fakeStore};
