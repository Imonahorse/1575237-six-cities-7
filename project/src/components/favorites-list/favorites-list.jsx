import React from 'react';
import FavoritesCity from '../favorites-city/favorites-city.jsx';
import {useSelector} from 'react-redux';
import {selectFilteredFavorite} from '../../store/reducer/app-data/selectors.js';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty.jsx';

function FavoritesList() {
  const favoritesOffers = useSelector(selectFilteredFavorite);
  const cities = Object.keys(favoritesOffers);

  if(!cities.length) {
    return <FavoritesEmpty />;
  }

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {cities.map((city) => (
          <FavoritesCity cityOffers={favoritesOffers[city]} city={city} key={city} />
        ))}
      </ul>
    </section>
  );
}

export default FavoritesList;
