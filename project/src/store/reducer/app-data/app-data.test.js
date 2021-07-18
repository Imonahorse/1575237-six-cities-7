import appData from './app-data.js';
import {ActionsType as ActionType} from '../../actions/actions.js';

describe('Reducer: app-data', () => {
  it('should change the status of the sent offer to "isLoading"', () => {
    const state = {
      setFavoriteStatus: {
        isLoading: false,
        isError: false,
        isSuccess: false,
      },
    };

    const setFavoriteAction = {
      type: ActionType.SET_FAVORITE_REQUEST,
    };

    expect(appData(state, setFavoriteAction))
      .toEqual({
        setFavoriteStatus: {isLoading: true, isError: false, isSuccess: false},
      });
  });

  it('should change the status of the sent offer to "isError"', () => {
    const state = {
      setFavoriteStatus: {
        isLoading: false,
        isError: false,
        isSuccess: false,
      },
    };

    const setFavoriteAction = {
      type: ActionType.SET_FAVORITE_ERROR,
    };

    expect(appData(state, setFavoriteAction))
      .toEqual({
        setFavoriteStatus: {isLoading: false, isError: true, isSuccess: false},
      });
  });

  it('should change the status of the sent offer to "isSuccess", write the response in offer and change the offers based on it', () => {
    const state = {
      setFavoriteStatus: {
        isLoading: false,
        isError: false,
        isSuccess: false,
      },
      offer: '',
      offers: [{id:1, test: 'one'}, {id: 2, text: 'test'}],
    };

    const setFavoriteAction = {
      type: ActionType.SET_FAVORITE_SUCCESS,
      payload: {id:1, text: 'two'},
    };

    expect(appData(state, setFavoriteAction))
      .toEqual({
        setFavoriteStatus: {isLoading: false, isError: false, isSuccess: true},
        offer: {id:1, text: 'two'},
        offers: [{id:1, text: 'two'}, {id: 2, text: 'test'}],
      });
  });

  it('should change the status of the sent comment to "isLoading"', () => {
    const state = {
      commentStatus: {
        isLoading: false,
        isError: false,
        isSuccess: false,
      },
    };

    const setCommentAction = {
      type: ActionType.SET_COMMENT_REQUEST,
    };

    expect(appData(state, setCommentAction))
      .toEqual({
        commentStatus: {isLoading: true, isError: false, isSuccess: false},
      });
  });

  it('should change the status of the sent comment to "isError"', () => {
    const state = {
      commentStatus: {
        isLoading: false,
        isError: false,
        isSuccess: false,
      },
    };

    const setCommentAction = {
      type: ActionType.SET_COMMENT_ERROR,
    };

    expect(appData(state, setCommentAction))
      .toEqual({
        commentStatus: {isLoading: false, isError: true, isSuccess: false},
      });
  });

  it('should change the status of the sent comment to "isSuccess", write the response in comments', () => {
    const state = {
      commentStatus: {
        isLoading: false,
        isError: false,
        isSuccess: false,
      },
      comments: '',
    };

    const setCommentAction = {
      type: ActionType.SET_COMMENT_SUCCESS,
      payload: {id:1, text: 'test'},
    };

    expect(appData(state, setCommentAction))
      .toEqual({
        commentStatus: {isLoading: false, isError: false, isSuccess: true},
        comments: {id:1, text: 'test'},
      });
  });

  it('should change the status of the download comments to "isLoading"', () => {
    const state = {
      commentsStatus: {
        isLoading: false,
        isError: false,
        isSuccess: false,
      },
    };

    const getCommentsAction = {
      type: ActionType.GET_COMMENTS_REQUEST,
    };

    expect(appData(state, getCommentsAction))
      .toEqual({
        commentsStatus: {isLoading: true, isError: false, isSuccess: false},
      });
  });

  it('should change the status of the download comments to "isError"', () => {
    const state = {
      commentsStatus: {
        isLoading: false,
        isError: false,
        isSuccess: false,
      },
    };

    const getCommentsAction = {
      type: ActionType.GET_COMMENTS_ERROR,
    };

    expect(appData(state, getCommentsAction))
      .toEqual({
        commentsStatus: {isLoading: false, isError: true, isSuccess: false},
      });
  });

  it('should change the status of the download comments to "isSuccess", write the response in comments', () => {
    const state = {
      commentsStatus: {
        isLoading: false,
        isError: false,
        isSuccess: false,
      },
      comments: '',
    };

    const getCommentsAction = {
      type: ActionType.GET_COMMENTS_SUCCESS,
      payload: 'test',
    };

    expect(appData(state, getCommentsAction))
      .toEqual({
        commentsStatus: {isLoading: false, isError: false, isSuccess: true},
        comments: 'test',
      });
  });

  it('should change the status of the download near places offers to "isLoading"', () => {
    const state = {
      nearPlacesOffersStatus: {
        isLoading: false,
        isError: false,
        isSuccess: false,
      },
    };

    const nearPlacesOffersAction = {
      type: ActionType.NEAR_PLACES_OFFERS_REQUEST,
    };

    expect(appData(state, nearPlacesOffersAction))
      .toEqual({
        nearPlacesOffersStatus: {isLoading: true, isError: false, isSuccess: false},
      });
  });

  it('should change the status of the download near places offers to "isError"', () => {
    const state = {
      nearPlacesOffersStatus: {
        isLoading: false,
        isError: false,
        isSuccess: false,
      },
    };

    const nearPlacesOffersAction = {
      type: ActionType.NEAR_PLACES_OFFERS_ERROR,
    };

    expect(appData(state, nearPlacesOffersAction))
      .toEqual({
        nearPlacesOffersStatus: {isLoading: false, isError: true, isSuccess: false},
      });
  });

  it('should change the status of the download near places offers to "isSuccess", write the response in near places offers', () => {
    const state = {
      nearPlacesOffersStatus: {
        isLoading: false,
        isError: false,
        isSuccess: false,
      },
      nearPlacesOffers: '',
    };

    const nearPlacesOffersAction = {
      type: ActionType.NEAR_PLACES_OFFERS_SUCCESS,
      payload: 'test',
    };

    expect(appData(state, nearPlacesOffersAction))
      .toEqual({
        nearPlacesOffersStatus: {isLoading: false, isError: false, isSuccess: true},
        nearPlacesOffers: 'test',
      });
  });

  it('should change the status of the download offer to "isLoading"', () => {
    const state = {
      offerStatus: {
        isLoading: false,
        isError: false,
        isSuccess: false,
      },
    };

    const offerAction = {
      type: ActionType.LOAD_OFFER_REQUEST,
    };

    expect(appData(state, offerAction))
      .toEqual({
        offerStatus: {isLoading: true, isError: false, isSuccess: true},
      });
  });

  it('should change the status of the download offer to "isError"', () => {
    const state = {
      offerStatus: {
        isLoading: false,
        isError: false,
        isSuccess: false,
      },
    };

    const offerAction = {
      type: ActionType.LOAD_OFFER_ERROR,
    };

    expect(appData(state, offerAction))
      .toEqual({
        offerStatus: {isLoading: false, isError: true, isSuccess: false},
      });
  });

  it('should change the status of the download offer to "isSuccess", write the response in offer', () => {
    const state = {
      offerStatus: {
        isLoading: false,
        isError: false,
        isSuccess: false,
      },
      offer: '',
    };

    const offerAction = {
      type: ActionType.LOAD_OFFER_SUCCESS,
      payload: 'test',
    };

    expect(appData(state, offerAction))
      .toEqual({
        offerStatus: {isLoading: false, isError: false, isSuccess: true},
        offer: 'test',
      });
  });

  it('should change the status of the download offers to "isLoading"', () => {
    const state = {
      offersStatus: {
        isLoading: false,
        isError: false,
        isSuccess: false,
      },
    };

    const offerAction = {
      type: ActionType.LOAD_OFFERS_REQUEST,
    };

    expect(appData(state, offerAction))
      .toEqual({
        offersStatus: {isLoading: true, isError: false, isSuccess: false},
      });
  });

  it('should change the status of the download offers to "isError"', () => {
    const state = {
      offersStatus: {
        isLoading: false,
        isError: false,
        isSuccess: false,
      },
    };

    const offerAction = {
      type: ActionType.LOAD_OFFERS_ERROR,
    };

    expect(appData(state, offerAction))
      .toEqual({
        offersStatus: {isLoading: false, isError: true, isSuccess: false},
      });
  });

  it('should change the status of the download offers to "isSuccess", write the response in offers', () => {
    const state = {
      offersStatus: {
        isLoading: false,
        isError: false,
        isSuccess: false,
      },
      offers: '',
    };

    const offerAction = {
      type: ActionType.LOAD_OFFERS_SUCCESS,
      payload: 'test',
    };

    expect(appData(state, offerAction))
      .toEqual({
        offersStatus: {isLoading: false, isError: false, isSuccess: true},
        offers: 'test',
      });
  });

});
