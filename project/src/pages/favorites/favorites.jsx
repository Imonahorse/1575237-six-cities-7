import React from 'react';
import Header from '../../components/header/header.jsx';
import FavoritesList from '../../components/favorites-list/favorites-list.jsx';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty.jsx';
import Footer from '../../components/footer/footer.jsx';
import PropTypes from 'prop-types';
import offerCardProp from '../../components/offer-card/offer-card-prop.js';

function Favorites({offers}) {
  const cityOffers = offers.reduce((obj, current) => {
    if (!obj[current.city] && current.isFavorite) {
      obj[current.city] = [];
    }
    if (current.isFavorite) {
      obj[current.city].push(current);
    }
    return obj;
  }, {});
  const citiesCount = Object.keys(cityOffers).length;

  const isEmpty = citiesCount ? <FavoritesList cityOffers={cityOffers}/> : <FavoritesEmpty/>;

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {isEmpty}
        </div>
      </main>
      <Footer/>
    </div>
  );
}

Favorites.propTypes = {
  offers: PropTypes.arrayOf(offerCardProp).isRequired,
};

export default Favorites;
