import OfferCard from '../offer-card/offer-card.jsx';
import PropTypes from 'prop-types';
import mainProp from '../../pages/main/main-prop.js';
import React, {useState} from 'react';

function OffersList({offers}) {
  const [hoverCard, useHoverCard] = useState({id: null});
  const onHoverCard = (evt) => {
    const article = evt.currentTarget.id;
    useHoverCard({...hoverCard, id: article});
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <OfferCard key={offer.id} offer={offer} onHoverCard={onHoverCard}/>)}
    </div>
  );
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(
    mainProp,
  ).isRequired,
};

export default OffersList;
