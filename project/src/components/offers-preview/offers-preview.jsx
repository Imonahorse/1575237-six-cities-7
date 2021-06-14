import OffersList from '../offers-list/offers-list.jsx';
import React from 'react';
import Sorting from '../sorting/sorting';
import Map from '../../components/map/map.jsx';
import offerCardProp from '../offer-card/offer-card-prop.js';
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
        <div className="cities__right-section">
          <Map/>
        </div>
      </div>
    </div>
  );
}

OffersPreview.propTypes = {
  offers: PropTypes.arrayOf(offerCardProp).isRequired,
};


export default OffersPreview;
