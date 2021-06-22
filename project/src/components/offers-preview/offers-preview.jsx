import OffersList from '../offers-list/offers-list.jsx';
import React, {useState} from 'react';
import Sorting from '../sorting/sorting';
import Map from '../../components/map/map.jsx';
import offerCardProp from '../offer-card/offer-card-prop.js';
import PropTypes from 'prop-types';

function OffersPreview({cityOffers, cityState}) {
  const [activeCardId, setActiveCardId] = useState('');
  const [filteredOffers, setFilteredOffers] = useState(cityOffers);
  const handleActiveCard = (activeId) => setActiveCardId(activeId);
  const offerCount = cityOffers.length === 1 ? `${cityOffers.length} place` : `${cityOffers.length} places`;
  const handleFilteredOffers = (offers) => setFilteredOffers(offers);

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offerCount} to stay in {cityState}</b>
          <Sorting cityOffers={cityOffers} handleFilteredOffers={handleFilteredOffers}/>
          <OffersList cityOffers={filteredOffers} handleActiveCard={handleActiveCard}/>
        </section>
        <div className="cities__right-section">
          <Map activeCardId={activeCardId} cityOffers={cityOffers} cityState={cityState}/>
        </div>
      </div>
    </div>
  );
}

OffersPreview.propTypes = {
  cityState: PropTypes.string.isRequired,
  cityOffers: PropTypes.arrayOf(offerCardProp).isRequired,
};


export default OffersPreview;
