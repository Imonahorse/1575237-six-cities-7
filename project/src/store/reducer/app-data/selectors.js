import {NameSpace} from '../root-reducer.js';
import {selectCity, selectActiveSort} from '../app-process/selectors.js';
import {createSelector} from 'reselect';
import {SortingTypes} from '../../../sort.js';

const selectOffers = (state) => state[NameSpace.DATA].offers;
const selectOffersStatus = (state) => state[NameSpace.DATA].offersStatus;
const selectComments = (state) => state[NameSpace.DATA].comments.slice(0, 10).sort((a, b) => new Date(b.date) - new Date(a.date));
const selectOffer = (state) => state[NameSpace.DATA].offer;
const selectOfferStatus = (state) => state[NameSpace.DATA].offerStatus;
const selectNearPlacesOffers = (state) => state[NameSpace.DATA].nearPlacesOffers;
const selectCommentStatus = (state) => state[NameSpace.DATA].commentStatus;
const selectFavorite = (state) => state[NameSpace.DATA].favorite;
const selectFavoriteStatus = (state) => state[NameSpace.DATA].favoriteStatus;
const selectFilteredFavorite = createSelector(selectFavorite, (offers) => (
  offers.reduce((acc, current) => {
    if (!acc[current.city.name]) {
      acc[current.city.name] = [];
    }
    acc[current.city.name].push(current);
    return acc;
  }, {})
));
const selectFilteredOffers = createSelector(selectOffers, selectCity, selectActiveSort,
  (offers, currentCity, activeSort) => (
    offers.filter((offer) => offer.city.name === currentCity)
      .slice()
      .sort(SortingTypes[activeSort])
  )
);
const selectNearOffersForMap = createSelector(selectNearPlacesOffers, selectOffer,
  (nearOffers, offer) => {
    const offers = nearOffers.slice();
    offers.push(offer);
    return offers;
  }
);

export {
  selectOffers,
  selectOffersStatus,
  selectComments,
  selectOffer,
  selectOfferStatus,
  selectNearPlacesOffers,
  selectCommentStatus,
  selectFilteredOffers,
  selectFavorite,
  selectFavoriteStatus,
  selectFilteredFavorite,
  selectNearOffersForMap
};


