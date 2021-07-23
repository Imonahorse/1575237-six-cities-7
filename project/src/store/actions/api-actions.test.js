import {
  fetchOffersList,
  checkAuth,
  fetchOffer,
  fetchNearPlacesOffers,
  fetchComments,
  setComment,
  fetchFavorite,
  setFavorite,
  login,
  logout
} from './api-actions.js';
import MockAdapter from 'axios-mock-adapter';
import createApi from '../../services/api.js';
import {APIRoutes, AppRoutes, AuthorizationStatus} from '../../const.js';
import {ActionsType} from './actions.js';
import {generatePath} from 'react-router-dom';

let api = null;
const ServerResponse = {
  SUCCESS: 200,
  ERROR: 404,
};

describe('Async operation', () => {
  beforeAll(() => {
    api = createApi(() => {
    });
  });

  it('should make a successful API call to delete /logout', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const logoutLoader = logout();

    Storage.prototype.removeItem = jest.fn();

    apiMock
      .onDelete(APIRoutes.LOGOUT)
      .reply(ServerResponse.SUCCESS, [{fake: true}]);

    return logoutLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionsType.LOGOUT_REQUEST,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionsType.LOGOUT_SUCCESS,
          payload: AuthorizationStatus.NO_AUTH,
        });
        expect(Storage.prototype.removeItem).nthCalledWith(1, 'token');
      });
  });

  it('should make a failed API call to delete /logout', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const logoutLoader = logout();

    apiMock
      .onDelete(APIRoutes.LOGOUT)
      .reply(ServerResponse.ERROR, [{fake: true}]);

    return logoutLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionsType.LOGOUT_REQUEST,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionsType.LOGOUT_ERROR,
        });
      });
  });

  it('should make a successful API call to post /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const data = {
      email: 'adfsg@mail.ru',
      password: 'adsf324324',
    };
    const loginLoader = login(data);

    apiMock
      .onPost(APIRoutes.LOGIN)
      .reply(ServerResponse.SUCCESS, [{fake: true}]);

    return loginLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(4);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionsType.GET_LOGIN_REQUEST,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionsType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionsType.GET_LOGIN_SUCCESS,
          payload: [{fake: true}],
        });
        expect(dispatch).toHaveBeenNthCalledWith(4, {
          type: ActionsType.REDIRECT_TO_ROUTE,
          payload: AppRoutes.MAIN,
        });
      });
  });

  it('should make a failed API call to post /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const data = {
      email: 'adfsg@mail.ru',
      password: 'adsf324324',
    };
    const loginLoader = login(data);

    apiMock
      .onPost(APIRoutes.LOGIN)
      .reply(ServerResponse.ERROR, [{fake: true}]);

    return loginLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionsType.GET_LOGIN_REQUEST,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionsType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.NO_AUTH,
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionsType.GET_LOGIN_ERROR,
        });
      });
  });

  it('should make a successful API call to GET /login from checkAuth', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(APIRoutes.LOGIN)
      .reply(ServerResponse.SUCCESS, [{fake: true}]);

    return checkAuthLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionsType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionsType.GET_LOGIN_SUCCESS,
          payload: [{fake: true}],
        });
      });
  });

  it('should make a failed API call to GET /login from checkAuth', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(APIRoutes.LOGIN)
      .reply(ServerResponse.ERROR, [{fake: true}]);

    return checkAuthLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionsType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.NO_AUTH,
        });
      });
  });

  it('should make a successful API call to GET /offers', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const OfferListLoader = fetchOffersList();

    apiMock
      .onGet(generatePath(APIRoutes.OFFERS))
      .reply(ServerResponse.SUCCESS, [{fake: true}]);

    return OfferListLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionsType.LOAD_OFFERS_REQUEST,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionsType.LOAD_OFFERS_SUCCESS,
          payload: [{fake: true}],
        });
      });
  });
  it('should make a failed API call to GET /offers', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const OfferListLoader = fetchOffersList();

    apiMock
      .onGet(generatePath(APIRoutes.OFFERS))
      .reply(ServerResponse.ERROR, [{fake: true}]);

    return OfferListLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionsType.LOAD_OFFERS_REQUEST,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionsType.LOAD_OFFERS_ERROR,
        });
      });
  });

  it('should make a successful API call to GET /favorite', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteLoader = fetchFavorite();

    apiMock
      .onGet(generatePath(APIRoutes.FAVORITE))
      .reply(ServerResponse.SUCCESS, [{fake: true}]);

    return favoriteLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionsType.FETCH_FAVORITE_REQUEST,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionsType.FETCH_FAVORITE_SUCCESS,
          payload: [{fake: true}],
        });
      });
  });

  it('should make a failed API call to GET /favorite', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteLoader = fetchFavorite();

    apiMock
      .onGet(generatePath(APIRoutes.FAVORITE))
      .reply(ServerResponse.ERROR, [{fake: true}]);

    return favoriteLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionsType.FETCH_FAVORITE_REQUEST,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionsType.FETCH_FAVORITE_ERROR,
        });
      });
  });

  it('should make a successful API call to POST /favorite', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeId = 1;
    const fakeStatus = 0;
    const favoriteSender = setFavorite(fakeId, fakeStatus);

    apiMock
      .onPost(generatePath(APIRoutes.FAVORITE, {id: fakeId, parameter: fakeStatus}))
      .reply(ServerResponse.SUCCESS, [{fake: true}]);

    return favoriteSender(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionsType.SET_FAVORITE_REQUEST,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionsType.SET_FAVORITE_SUCCESS,
          payload: [{fake: true}],
        });
      });
  });
  it('should make a failed API call to POST /favorite', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeId = 1;
    const fakeStatus = 0;
    const favoriteSender = setFavorite(fakeId, fakeStatus);

    apiMock
      .onPost(generatePath(APIRoutes.FAVORITE, {id: fakeId, parameter: fakeStatus}))
      .reply(ServerResponse.ERROR, [{fake: true}]);

    return favoriteSender(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionsType.SET_FAVORITE_REQUEST,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionsType.SET_FAVORITE_ERROR,
        });
      });
  });

  it('should make a successful API call to POST /comments', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeId = 1;
    const fakeBody = 'test';
    const commentSender = setComment(fakeId, fakeBody);

    apiMock
      .onPost(generatePath(APIRoutes.COMMENTS, {id: fakeId}))
      .reply(ServerResponse.SUCCESS, [{fake: true}]);

    return commentSender(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionsType.SET_COMMENT_REQUEST,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionsType.SET_COMMENT_SUCCESS,
          payload: [{fake: true}],
        });
      });
  });
  it('should make a failed API call to POST /comments', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeId = 1;
    const fakeBody = 'test';
    const commentSender = setComment(fakeId, fakeBody);

    apiMock
      .onPost(generatePath(APIRoutes.COMMENTS, {id: fakeId}))
      .reply(ServerResponse.ERROR, [{fake: true}]);

    return commentSender(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionsType.SET_COMMENT_REQUEST,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionsType.SET_COMMENT_ERROR,
        });
      });
  });

  it('should make a successful API call to GET /comments', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeId = 1;
    const commentsLoader = fetchComments(fakeId);

    apiMock
      .onGet(generatePath(APIRoutes.COMMENTS, {id: fakeId}))
      .reply(ServerResponse.SUCCESS, [{fake: true}]);

    return commentsLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionsType.GET_COMMENTS_REQUEST,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionsType.GET_COMMENTS_SUCCESS,
          payload: [{fake: true}],
        });
      });
  });
  it('should make a failed API call to GET /comments', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeId = 1;
    const commentsLoader = fetchComments(fakeId);

    apiMock
      .onGet(generatePath(APIRoutes.COMMENTS, {id: fakeId}))
      .reply(ServerResponse.ERROR, [{fake: true}]);

    return commentsLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionsType.GET_COMMENTS_REQUEST,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionsType.GET_COMMENTS_ERROR,
        });
      });
  });

  it('should make a successful API call to GET /hotels near places', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeId = 1;
    const nearPlacesLoader = fetchNearPlacesOffers(fakeId);

    apiMock
      .onGet(generatePath(APIRoutes.OFFERS, {id: fakeId, parameter: 'nearby'}))
      .reply(ServerResponse.SUCCESS, [{fake: true}]);

    return nearPlacesLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionsType.NEAR_PLACES_OFFERS_REQUEST,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionsType.NEAR_PLACES_OFFERS_SUCCESS,
          payload: [{fake: true}],
        });
      });
  });
  it('should make a failed API call to GET /hotels near places', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeId = 1;
    const nearPlacesLoader = fetchNearPlacesOffers(fakeId);

    apiMock
      .onGet(generatePath(APIRoutes.OFFERS, {id: fakeId, parameter: 'nearby'}))
      .reply(ServerResponse.ERROR, [{fake: true}]);

    return nearPlacesLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionsType.NEAR_PLACES_OFFERS_REQUEST,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionsType.NEAR_PLACES_OFFERS_ERROR,
        });
      });
  });

  it('should make a successful API call to GET /offer', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeId = 1;
    const offerLoader = fetchOffer(fakeId);

    apiMock
      .onGet(generatePath(APIRoutes.OFFERS, {id: fakeId}))
      .reply(ServerResponse.SUCCESS, [{fake: true}]);

    return offerLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionsType.LOAD_OFFER_REQUEST,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionsType.LOAD_OFFER_SUCCESS,
          payload: [{fake: true}],
        });
      });
  });

  it('should make a failed API call to GET /offer', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeId = 1;
    const offerLoader = fetchOffer(fakeId);

    apiMock
      .onGet(generatePath(APIRoutes.OFFERS, {id: fakeId}))
      .reply(ServerResponse.ERROR, [{fake: true}]);

    return offerLoader(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionsType.LOAD_OFFER_REQUEST,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionsType.REDIRECT_TO_ROUTE,
          payload: AppRoutes.NOT_FOUND,
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionsType.LOAD_OFFER_ERROR,
        });
      });
  });

});
