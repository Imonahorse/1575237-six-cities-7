import {
  loadOfferSuccess,
  setCommentSuccess,
  setCommentRequest,
  setCommentError,
  getCommentsRequest,
  getCommentsSuccess,
  getCommentsError,
  nearPlacesOffersRequest,
  nearPlacesOffersSuccess,
  nearPlacesOffersError,
  loadOfferRequest,
  loadOfferError,
  loadOffersSuccess,
  loadOffersRequest,
  loadOffersError,
  setFavoriteSuccess,
  setFavoriteRequest,
  setFavoriteError
} from '../../actions/actions.js';
import {createReducer} from '@reduxjs/toolkit';

const addNewId = (offer, offers) => {
  const index = offers.findIndex((item) => item.id === offer.id);
  if(index === -1) {
    return offers;
  }

  offers.splice(index, 1, offer);
  return offers;
};


const initialState = {
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
  setFavoriteStatus: {
    isSuccess: false,
    isError: false,
    isLoading: true,
  },
};

const appData = createReducer(initialState, (builder) => {
  builder
    .addCase(setFavoriteSuccess, (state, action) => {
      state.offer = action.payload;
      state.offers = addNewId(state.offer, state.offers);
      state.setFavoriteStatus.isSuccess = true;
      state.setFavoriteStatus.isLoading = false;
      state.setFavoriteStatus.isError = false;
    })

    .addCase(setFavoriteRequest, (state) => {
      state.setFavoriteStatus.isSuccess = false;
      state.setFavoriteStatus.isLoading = true;
      state.setFavoriteStatus.isError = false;
    })

    .addCase(setFavoriteError, (state) => {
      state.setFavoriteStatus.isSuccess = false;
      state.setFavoriteStatus.isLoading = false;
      state.setFavoriteStatus.isError = true;
    })

    .addCase(setCommentSuccess, (state, action) => {
      state.comments = action.payload;
      state.commentStatus.isSuccess = true;
      state.commentStatus.isLoading = false;
      state.commentStatus.isError = false;
    })

    .addCase(setCommentRequest, (state) => {
      state.commentStatus.isSuccess = false;
      state.commentStatus.isLoading = true;
      state.commentStatus.isError = false;
    })

    .addCase(setCommentError, (state) => {
      state.commentStatus.isSuccess = false;
      state.commentStatus.isLoading = false;
      state.commentStatus.isError = true;
    })

    .addCase(getCommentsRequest, (state) => {
      state.commentsStatus.isLoading = true;
    })

    .addCase(getCommentsSuccess, (state, action) => {
      state.commentsStatus.isLoading = false;
      state.commentsStatus.isSuccess = true;
      state.commentsStatus.isError = false;
      state.comments = action.payload;
    })

    .addCase(getCommentsError, (state) => {
      state.commentsStatus.isError = true;
    })

    .addCase(nearPlacesOffersSuccess, (state, action) => {
      state.nearPlacesOffers = action.payload;
      state.nearPlacesOffersStatus.isLoading = false;
      state.nearPlacesOffersStatus.isSuccess = true;
    })

    .addCase(nearPlacesOffersRequest, (state) => {
      state.nearPlacesOffersStatus.isLoading = true;
    })

    .addCase(nearPlacesOffersError, (state) => {
      state.nearPlacesOffersStatus.isLoading = false;
      state.nearPlacesOffersStatus.isSuccess = false;
      state.nearPlacesOffersStatus.isError = true;
    })

    .addCase(loadOfferSuccess, (state, action) => {
      state.offerStatus.isLoading = false;
      state.offerStatus.isSuccess = true;
      state.offerStatus.isError = false;
      state.offer = action.payload;
    })

    .addCase(loadOfferRequest, (state) => {
      state.offerStatus.isLoading = true;
      state.offerStatus.isSuccess = true;
      state.offerStatus.isError = false;
    })

    .addCase(loadOfferError, (state) => {
      state.offerStatus.isLoading = false;
      state.offerStatus.isSuccess = false;
      state.offerStatus.isError = true;
    })

    .addCase(loadOffersSuccess, (state, action) => {
      state.offers = action.payload;
      state.offersStatus.isSuccess = true;
      state.offersStatus.isError = false;
      state.offersStatus.isLoading = false;
    })

    .addCase(loadOffersRequest, (state) => {
      state.offersStatus.isLoading = true;
    })

    .addCase(loadOffersError, (state, action) => {
      state.offers = action.payload;
      state.offersStatus.isError = true;
      state.offersStatus.isLoading = false;
      state.offersStatus.isSuccess = false;
    });
});

export default appData;
