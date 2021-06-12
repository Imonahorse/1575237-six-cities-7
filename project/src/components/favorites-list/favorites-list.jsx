import React from 'react';
import {CITIES} from '../../const.js';
import OfferCard from '../offer-card/offer-card.jsx';
import PropTypes from 'prop-types';
import offerCardProp from '../offer-card/offer-card-prop.js';

function FavoritesList({offers}) {
  return (
    <ul className="favorites__list">
      {CITIES.map((city) => {
        const offersForCity = offers.filter((offer) => offer.city === city);
        const favoriteOffers = offersForCity.filter((offer) => offer.isFavorite);

        if(!favoriteOffers.length) {
          return '';
        }

        return(
          <li className="favorites__locations-items" key={city}>
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="/#">
                  <span>{city}</span>
                </a>
              </div>
            </div>
            <div className="favorites__places">
              {favoriteOffers.map((offer) => <OfferCard offer={offer} key={offer.city}/>)}
            </div>
          </li>
        );
      })}
    </ul>
  );
}

FavoritesList.propTypes = {
  offers: PropTypes.arrayOf(offerCardProp).isRequired,
};

export default FavoritesList;
