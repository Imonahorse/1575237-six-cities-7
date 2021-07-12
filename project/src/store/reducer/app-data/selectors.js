import {NameSpace} from '../root-reducer.js';
import {selectCity, selectActiveSort} from '../app-process/selectors.js';
import {createSelector} from 'reselect';
import {SortingTypes} from '../../../sort.js';

const selectOffers = (state) => state[NameSpace.DATA].offers;
const selectOffersStatus = (state) => state[NameSpace.DATA].offersStatus;
const selectComments = (state) => state[NameSpace.DATA].comments;
const selectCommentsStatus = (state) => state[NameSpace.DATA].commentsStatus;
const selectOffer = (state) => state[NameSpace.DATA].offer;
const selectOfferStatus = (state) => state[NameSpace.DATA].offerStatus;
const selectNearPlacesOffers = (state) => state[NameSpace.DATA].nearPlacesOffers;
const selectNearPlacesOffersStatus = (state) => state[NameSpace.DATA].nearPlacesOffersStatus;
const selectCommentStatus = (state) => state[NameSpace.DATA].commentStatus;
const setFavoriteStatus = (state) => state[NameSpace.DATA].setFavoriteStatus;
const selectFilteredOffers = createSelector(selectOffers, selectCity, selectActiveSort,
  (offers, currentCity, activeSort) => (
    offers.filter((offer) => offer.city.name === currentCity)
      .slice()
      .sort(SortingTypes[activeSort])
  ));

export {
  selectOffers,
  selectOffersStatus,
  selectComments,
  selectCommentsStatus,
  selectOffer,
  selectOfferStatus,
  selectNearPlacesOffers,
  selectNearPlacesOffersStatus,
  selectCommentStatus,
  setFavoriteStatus,
  selectFilteredOffers
};


