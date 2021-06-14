import React from 'react';
import FavoritesCity from '../favorites-city/favorites-city.jsx';
import PropTypes from 'prop-types';
import offerCardProp from '../offer-card/offer-card-prop.js';

function FavoritesList({cityOffers}) {
  const cities = Object.keys(cityOffers);

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {cities.map((city) => (
          <FavoritesCity cityOffers={cityOffers[city]} city={city} key={city}/>
        ))}
      </ul>
    </section>
  );
}

FavoritesList.propTypes = {
  cityOffers: PropTypes.arrayOf(offerCardProp).isRequired,
};

export default FavoritesList;
