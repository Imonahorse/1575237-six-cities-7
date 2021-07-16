import {
  fetchOffersList,
  checkAuth,
  login,
  logout,
  fetchOffer,
  fetchNearPlacesOffers,
  fetchComments,
  setComment,
  fetchFavorite,
  setFavorite
} from './api-actions.js';
import MockAdapter from 'axios-mock-adapter';
import createApi from "../../services/api";
import {APIRoutes, AuthorizationStatus} from "../../const";
import {ActionsType} from "./actions";

let api = null;
const ServerResponse = {
  SUCCESS: 200,
  ERROR: 404,
}

describe('Async operation', () => {
  beforeAll(() => {
    api = createApi(() => {
    })
  })

  it('should make a successful API call to GET /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth()

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
  })
  it('should make a failed API call to GET /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth()

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
  })

  it('should make a successful API call to GET /offers', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const OfferListLoader = fetchOffersList();

    apiMock
      .onGet(APIRoutes.OFFERS)
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
  })
  it('should make a failed API call to GET /offers', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const OfferListLoader = fetchOffersList();

    apiMock
      .onGet(APIRoutes.OFFERS)
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
  })

  it('should make a successful API call to GET /favorite', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteLoader = fetchFavorite()

    apiMock
      .onGet('/favorite')
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
  })
  it('should make a failed API call to GET /favorite', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteLoader = fetchFavorite()

    apiMock
      .onGet('/favorite')
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
  })

  it('should make a successful API call to POST /favorite', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeId = 1;
    const fakeStatus = 0;
    const favoriteSender = setFavorite(fakeId, fakeStatus);

    apiMock
      .onPost(`/favorite/${fakeId}/${fakeStatus}`)
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
  })
  it('should make a failed API call to POST /favorite', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeId = 1;
    const fakeStatus = 0;
    const favoriteSender = setFavorite(fakeId, fakeStatus);

    apiMock
      .onPost(`/favorite/${fakeId}/${fakeStatus}`)
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
  })

  it('should make a successful API call to POST /comments', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeId = 1;
    const fakeBody = 'test';
    const commentSender = setComment(fakeId, fakeBody);

    apiMock
      .onPost(`/comments/${fakeId}`)
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
  })
  it('should make a failed API call to POST /comments', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeId = 1;
    const fakeBody = 'test';
    const commentSender = setComment(fakeId, fakeBody);

    apiMock
      .onPost(`/comments/${fakeId}`)
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
  })

  it('should make a successful API call to GET /comments', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeId = 1;
    const commentsLoader = fetchComments(fakeId);

    apiMock
      .onGet(`/comments/${fakeId}`)
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
  })
  it('should make a failed API call to GET /comments', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeId = 1;
    const commentsLoader = fetchComments(fakeId);

    apiMock
      .onGet(`/comments/${fakeId}`)
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
  })

  it('should make a successful API call to GET /hotels near places', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeId = 1;
    const nearPlacesLoader = fetchNearPlacesOffers(fakeId);

    apiMock
      .onGet(`/hotels/${fakeId}/nearby`)
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
  })
  it('should make a failed API call to GET /hotels near places', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeId = 1;
    const nearPlacesLoader = fetchNearPlacesOffers(fakeId);

    apiMock
      .onGet(`/hotels/${fakeId}/nearby`)
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
  })
})
