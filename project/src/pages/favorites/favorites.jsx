import React from 'react';
import Header from '../../components/header/header.jsx';
import FavoritesList from '../../components/favorites-list/favorites-list.jsx';
import Footer from '../../components/footer/footer.jsx';
import PropTypes from 'prop-types';
import offerCardProp from '../../components/offer-card/offer-card-prop.js';

function Favorites({offers}) {
  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList offers={offers}/>
          </section>
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
