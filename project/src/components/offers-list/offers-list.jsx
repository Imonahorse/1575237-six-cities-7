import OfferCard from '../offer-card/offer-card.jsx';
import React, {useState} from 'react';
import offerCardProp from '../offer-card/offer-card-prop.js';
import PropTypes from 'prop-types';

function OffersList({offers}) {
  const [, setActiveCard] = useState('');
  const handleActiveCard = (activeId) => setActiveCard(activeId);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <OfferCard key={offer.id} offer={offer} handleActiveCard={handleActiveCard}/>)}
    </div>
  );
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(offerCardProp).isRequired,
};

export default OffersList;
