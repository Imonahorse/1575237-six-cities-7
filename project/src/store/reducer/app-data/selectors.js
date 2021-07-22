import {NameSpace} from '../root-reducer.js';
import {selectCity, selectActiveSort} from '../app-process/selectors.js';
import {createSelector} from 'reselect';
import {SortingTypes} from '../../../sort.js';

const selectOffers = (state) => state[NameSpace.DATA].offers;
const selectOffersStatus = (state) => state[NameSpace.DATA].offersStatus;
const selectComments = (state) => state[NameSpace.DATA].comments.slice(0, 10);
const selectOffer = (state) => state[NameSpace.DATA].offer;
const selectOfferStatus = (state) => state[NameSpace.DATA].offerStatus;
const selectNearPlacesOffers = (state) => state[NameSpace.DATA].nearPlacesOffers;
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
  selectOffer,
  selectOfferStatus,
  selectNearPlacesOffers,
  selectCommentStatus,
  setFavoriteStatus,
  selectFilteredOffers
};


