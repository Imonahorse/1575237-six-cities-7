import OffersList from '../offers-list/offers-list.jsx';
import React from "react";
import Sorting from '../sorting/sorting';
import Map from '../../components/map/map.jsx';
import PropTypes from 'prop-types';

function OffersPreview({offers}) {
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">312 places to stay in Amsterdam</b>
          <Sorting/>
          <OffersList offers={offers}/>
        </section>
        <Map/>
      </div>
    </div>
  )
}

OffersPreview.propTypes = {
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


export default OffersPreview;
