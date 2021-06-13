import OfferCard from '../offer-card/offer-card.jsx';
import React from 'react';
import PropTypes from 'prop-types';
import favoritesCityProp from '../favorites-city/favorites-city-prop.js';

function FavoritesCity({cityOffers, city}) {
  console.log(cityOffers)
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
        {cityOffers[city].map((offer) => <OfferCard offer={offer} key={offer.city}/>)}
      </div>
    </li>
  );
}

FavoritesCity.propTypes = {
  cityOffers: favoritesCityProp,
  city: PropTypes.string.isRequired,
};

export default FavoritesCity;
