import React from 'react';
import {CITIES} from '../../const.js';
import FavoritesCity from '../favorites-city/favorites-city.jsx';
import PropTypes from 'prop-types';
import offerCardProp from '../offer-card/offer-card-prop.js';

function FavoritesList({offers}) {
  return (
    <ul className="favorites__list">
      {CITIES.map((city) => {
        const favoriteOffers = offers.filter((offer) => offer.city === city && offer.isFavorite);

        if (!favoriteOffers.length) {
          return '';
        }

        return (
          <FavoritesCity favoriteOffers={favoriteOffers} city={city} key={city}/>
        );
      })}
    </ul>
  );
}

FavoritesList.propTypes = {
  offers: PropTypes.arrayOf(offerCardProp).isRequired,
};

export default FavoritesList;
