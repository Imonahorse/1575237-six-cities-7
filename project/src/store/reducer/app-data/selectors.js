import {NameSpace} from '../root-reducer.js';

const getOffers = (state) => state[NameSpace.DATA].offers;
const getOffersStatus = (state) => state[NameSpace.DATA].offersStatus;
const getComments = (state) => state[NameSpace.DATA].comments;
const getCommentsStatus = (state) => state[NameSpace.DATA].commentsStatus;
const getOffer = (state) => state[NameSpace.DATA].offer;
const getOfferStatus = (state) => state[NameSpace.DATA].offerStatus;
const getNearPlacesOffers = (state) => state[NameSpace.DATA].nearPlacesOffers;
const getNearPlacesOffersStatus = (state) => state[NameSpace.DATA].nearPlacesOffersStatus;
const getCommentStatus = (state) => state[NameSpace.DATA].commentStatus;

export {
  getOffers,
  getOffersStatus,
  getComments,
  getCommentsStatus,
  getOffer,
  getOfferStatus,
  getNearPlacesOffers,
  getNearPlacesOffersStatus,
  getCommentStatus
};


