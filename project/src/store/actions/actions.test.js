import {
  setFavoriteRequest,
  setFavoriteSuccess,
  setFavoriteError,
  fetchFavoriteRequest,
  fetchFavoriteSuccess,
  fetchFavoriteError,
  setCommentRequest,
  setCommentSuccess,
  setCommentError,
  changeCity,
  changeSort,
  requiredAuthorization,
  redirectToRoute,
  getCommentsRequest,
  getCommentsSuccess,
  getCommentsError,
  ActionsType,
  nearPlacesOffersRequest,
  nearPlacesOffersSuccess,
  nearPlacesOffersError,
  loadOfferSuccess,
  loadOfferRequest,
  loadOfferError,
  getLoginRequest,
  getLoginSuccess,
  getLoginError,
  loadOffersSuccess,
  loadOffersRequest,
  loadOffersError,
  logoutSuccess,
  logoutError,
  logoutRequest
} from './actions.js';

const test = 'payload';

describe('Actions', () => {
  it('action creator for change the logout status to loading', () => {
    const expectedAction = {
      type: ActionsType.LOGOUT_REQUEST,
    }

    expect(logoutRequest()).toEqual(expectedAction);
  })

  it('action creator for change the logout status to success', () => {
    const expectedAction = {
      type: ActionsType.LOGOUT_SUCCESS,
      payload: test,
    }

    expect(logoutSuccess(test)).toEqual(expectedAction);
  })

  it('action creator for change the logout status to error', () => {
    const expectedAction = {
      type: ActionsType.LOGOUT_ERROR,
    }

    expect(logoutError()).toEqual(expectedAction);
  })

  it('action creator for change the login status to loading', () => {
    const expectedAction = {
      type: ActionsType.GET_LOGIN_REQUEST,
    }

    expect(getLoginRequest()).toEqual(expectedAction);
  })

  it('action creator for change the login status to success', () => {
    const expectedAction = {
      type: ActionsType.GET_LOGIN_SUCCESS,
      payload: test,
    }

    expect(getLoginSuccess(test)).toEqual(expectedAction);
  })

  it('action creator for change the login status to error', () => {
    const expectedAction = {
      type: ActionsType.GET_LOGIN_ERROR,
    }

    expect(getLoginError()).toEqual(expectedAction);
  })

  it('action creator for change the download status of offers to loading', () => {
    const expectedAction = {
      type: ActionsType.LOAD_OFFERS_REQUEST,
    }

    expect(loadOffersRequest()).toEqual(expectedAction);
  })

  it('action creator for change the download status of offers to success', () => {
    const expectedAction = {
      type: ActionsType.LOAD_OFFERS_SUCCESS,
      payload: test,
    }

    expect(loadOffersSuccess(test)).toEqual(expectedAction);
  })

  it('action creator for change the download status of offers to error', () => {
    const expectedAction = {
      type: ActionsType.LOAD_OFFERS_ERROR,
    }

    expect(loadOffersError()).toEqual(expectedAction);
  })

  it('action creator for change the download status of offer to loading', () => {
    const expectedAction = {
      type: ActionsType.LOAD_OFFER_REQUEST,
    }

    expect(loadOfferRequest()).toEqual(expectedAction);
  })

  it('action creator for change the download status of offer to success', () => {
    const expectedAction = {
      type: ActionsType.LOAD_OFFER_SUCCESS,
      payload: test,
    }

    expect(loadOfferSuccess(test)).toEqual(expectedAction);
  })

  it('action creator for change the download status of offer to error', () => {
    const expectedAction = {
      type: ActionsType.LOAD_OFFER_ERROR,
    }

    expect(loadOfferError()).toEqual(expectedAction);
  })

  it('action creator for change the download status of near places offers to loading', () => {
    const expectedAction = {
      type: ActionsType.NEAR_PLACES_OFFERS_REQUEST,
    }

    expect(nearPlacesOffersRequest()).toEqual(expectedAction);
  })

  it('action creator for change the download status of near places offers to success', () => {
    const expectedAction = {
      type: ActionsType.NEAR_PLACES_OFFERS_SUCCESS,
      payload: test,
    }

    expect(nearPlacesOffersSuccess(test)).toEqual(expectedAction);
  })

  it('action creator for change the download status of near places offers to error', () => {
    const expectedAction = {
      type: ActionsType.NEAR_PLACES_OFFERS_ERROR,
    }

    expect(nearPlacesOffersError()).toEqual(expectedAction);
  })

  it('action creator for change the download status of comments to loading', () => {
    const expectedAction = {
      type: ActionsType.GET_COMMENTS_REQUEST,
    }

    expect(getCommentsRequest()).toEqual(expectedAction);
  })

  it('action creator for change the download status of comments to success', () => {
    const expectedAction = {
      type: ActionsType.GET_COMMENTS_SUCCESS,
      payload: test,
    }

    expect(getCommentsSuccess(test)).toEqual(expectedAction);
  })

  it('action creator for change the download status of comments to error', () => {
    const expectedAction = {
      type: ActionsType.GET_COMMENTS_ERROR,
    }

    expect(getCommentsError()).toEqual(expectedAction);
  })

  it('action creator for redirect to route', () => {
    const expectedAction = {
      type: ActionsType.REDIRECT_TO_ROUTE,
      payload: test,
    }

    expect(redirectToRoute(test)).toEqual(expectedAction);
  })

  it('action creator for for check authorization', () => {
    const expectedAction = {
      type: ActionsType.REQUIRED_AUTHORIZATION,
      payload: test,
    }

    expect(requiredAuthorization(test)).toEqual(expectedAction);
  })

  it('action creator for change sort', () => {
    const expectedAction = {
      type: ActionsType.CHANGE_SORT,
      payload: test,
    }

    expect(changeSort(test)).toEqual(expectedAction);
  })

  it('action creator for change city', () => {
    const expectedAction = {
      type: ActionsType.CHANGE_CITY,
      payload: test,
    }

    expect(changeCity(test)).toEqual(expectedAction);
  })

  it('action creator for change the update status of favorite to loading', () => {
    const expectedAction = {
      type: ActionsType.SET_FAVORITE_REQUEST,
    }

    expect(setFavoriteRequest()).toEqual(expectedAction);
  })

  it('action creator for change the update status of favorite to success', () => {
    const expectedAction = {
      type: ActionsType.SET_FAVORITE_SUCCESS,
      payload: test,
    }

    expect(setFavoriteSuccess(test)).toEqual(expectedAction);
  })

  it('action creator for change the update status of favorite to error', () => {
    const expectedAction = {
      type: ActionsType.SET_FAVORITE_ERROR,
    }

    expect(setFavoriteError()).toEqual(expectedAction);
  })

  it('action creator for change the download status of favorite to loading', () => {
    const expectedAction = {
      type: ActionsType.FETCH_FAVORITE_REQUEST,
    }

    expect(fetchFavoriteRequest()).toEqual(expectedAction);
  })

  it('action creator for change the download status of favorite to success', () => {
    const expectedAction = {
      type: ActionsType.FETCH_FAVORITE_SUCCESS,
      payload: test,
    }

    expect(fetchFavoriteSuccess(test)).toEqual(expectedAction);
  })

  it('action creator for change the download status of favorite to error', () => {
    const expectedAction = {
      type: ActionsType.FETCH_FAVORITE_ERROR,
    }

    expect(fetchFavoriteError()).toEqual(expectedAction);
  })

  it('action creator for change the update status of comment to loading', () => {
    const expectedAction = {
      type: ActionsType.SET_COMMENT_REQUEST,
    }

    expect(setCommentRequest()).toEqual(expectedAction);
  })

  it('action creator for change the update status of comment to success', () => {
    const expectedAction = {
      type: ActionsType.SET_COMMENT_SUCCESS,
      payload: test,
    }

    expect(setCommentSuccess(test)).toEqual(expectedAction);
  })

  it('action creator for change the update status of comment to error', () => {
    const expectedAction = {
      type: ActionsType.SET_COMMENT_ERROR,
    }

    expect(setCommentError()).toEqual(expectedAction);
  })
})
