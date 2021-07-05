import React from 'react';
import OfferCard from '../offer-card/offer-card.jsx';
import offerCardProp from '../offer-card/offer-card-prop.js';
import PropTypes from 'prop-types';

function NearPlacesOffers({neighboringOffers}) {
  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {neighboringOffers.map((offer) => <OfferCard offer={offer} key={offer.price}/>)}
        </div>
      </section>
    </div>
  );
}

NearPlacesOffers.propTypes = {
  neighboringOffers: PropTypes.arrayOf(offerCardProp).isRequired,
};

export default NearPlacesOffers;
