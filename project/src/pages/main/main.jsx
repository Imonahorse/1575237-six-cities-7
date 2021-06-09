import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/header/header.jsx';
import Cities from '../../components/cities/cities.jsx';
import OffersPreview from '../../components/offers-preview/offers-preview.jsx'

function Main({offers}) {
  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Cities/>
        <OffersPreview offers={offers}/>
      </main>
    </div>
  );
}

Main.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.array.isRequired,
      isPremium: PropTypes.bool.isRequired,
      isFavorite: PropTypes.bool.isRequired,
      title: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      bedroomsCount: PropTypes.number.isRequired,
      maxAdults: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      features: PropTypes.array.isRequired,
      id: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(
        PropTypes.shape({
          src: PropTypes.string.isRequired,
          alt: PropTypes.string.isRequired,
          id: PropTypes.string.isRequired,
        }),
      ).isRequired,
      previewImage: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
      }),
      host: PropTypes.shape({
        name: PropTypes.string.isRequired,
        isPro: PropTypes.bool.isRequired,
        avatarUrl: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
      }),
    }),
  ).isRequired,
};

export default Main;
