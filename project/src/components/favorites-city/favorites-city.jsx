import OfferCard from '../offer-card/offer-card.jsx';
import React from 'react';
import PropTypes from 'prop-types';
import offerCardProp from '../offer-card/offer-card-prop';

function FavoritesCity({cityOffers, city}) {

  return (
    <li className="favorites__locations-items" key={city}>
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="/#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {cityOffers.map((offer) => <OfferCard offer={offer} key={offer.city}/>)}
      </div>
    </li>
  );
}

FavoritesCity.propTypes = {
  city: PropTypes.string.isRequired,
  cityOffers: PropTypes.arrayOf(offerCardProp).isRequired,
};

export default FavoritesCity;
