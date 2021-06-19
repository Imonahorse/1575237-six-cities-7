import OfferCard from '../offer-card/offer-card.jsx';
import React from 'react';
import offerCardProp from '../offer-card/offer-card-prop.js';
import PropTypes from 'prop-types';

function OffersList({cityOffers, handleActiveCard}) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {cityOffers.map((offer) => <OfferCard key={offer.id} offer={offer} handleActiveCard={handleActiveCard}/>)}
    </div>
  );
}

OffersList.propTypes = {
  cityOffers: PropTypes.arrayOf(offerCardProp).isRequired,
  handleActiveCard: PropTypes.func.isRequired,
};

export default OffersList;
