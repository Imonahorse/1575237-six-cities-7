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
  loadOffersError
} from '../../actions.js';
import {createReducer} from '@reduxjs/toolkit';

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
};

const appData = createReducer(initialState, (builder) => {
  builder
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
      state.comments = [];
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
      state.nearPlacesOffers = [];
    })

    .addCase(loadOfferSuccess, (state, action) => {
      state.offerStatus.isLoading= false;
      state.offerStatus.isSuccess= true;
      state.offerStatus.isError= false;
      state.offer = action.payload;
    })

    .addCase(loadOfferRequest, (state) => {
      state.offerStatus.isLoading= true;
      state.offerStatus.isSuccess= true;
      state.offerStatus.isError= false;
    })

    .addCase(loadOfferError, (state) => {
      state.offerStatus.isLoading= false;
      state.offerStatus.isSuccess= false;
      state.offerStatus.isError= true;
      state.offer = {};
    })

    .addCase(loadOffersSuccess, (state, action) => {
      state.offers = action.payload;
      state.offersStatus.isSuccess= true;
      state.offersStatus.isError= false;
      state.offersStatus.isLoading= false;
    })

    .addCase(loadOffersRequest, (state) => {
      state.offersStatus.isLoading= true;
    })

    .addCase(loadOffersError, (state, action) => {
      state.offers = action.payload;
      state.offersStatus.isError= true;
      state.offersStatus.isLoading= false;
      state.offersStatus.isSuccess= false;
    });
});

export default appData;
