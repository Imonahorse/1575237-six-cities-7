import Mark from '../mark/mark.jsx';
import {calcRating} from '../../utils.js';
import Host from '../host/host.jsx';
import React from 'react';
import offerCardProp from '../offer-card/offer-card-prop.js';

function OfferPage({offer}) {
  const {
    isPremium,
    price,
    title,
    type,
    rating,
    bedroomsCount,
    maxAdults,
    features,
    host,
    description,
  } = offer;

  return (
    <div className="property__container container">
      <div className="property__wrapper">
        {isPremium && <Mark/>}
        <div className="property__name-wrapper">
          <h1 className="property__name">
            {title}
          </h1>
          <button className="property__bookmark-button button" type="button">
            <svg className="property__bookmark-icon" width="31" height="33">
              <use xlinkHref="#icon-bookmark">
              </use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="property__rating rating">
          <div className="property__stars rating__stars">
            <span style={{width: calcRating(rating)}}>
            </span>
            <span className="visually-hidden">Rating</span>
          </div>
          <span className="property__rating-value rating__value">{rating}</span>
        </div>
        <ul className="property__features">
          <li className="property__feature property__feature--entire">
            {type}
          </li>
          <li className="property__feature property__feature--bedrooms">
            {bedroomsCount} Bedrooms
          </li>
          <li className="property__feature property__feature--adults">
            Max {maxAdults} adults
          </li>
        </ul>
        <div className="property__price">
          <b className="property__price-value">&euro;{price}</b>
          <span className="property__price-text">&nbsp;night</span>
        </div>
        <div className="property__inside">
          <h2 className="property__inside-title">What&apos;s inside</h2>
          <ul className="property__inside-list">
            {features.map((feature) => (
              <li className="property__inside-item" key={feature + price}>
                {feature}
              </li>),
            )}
          </ul>
        </div>
        <Host host={host} description={description}/>
        {/*<Comments comments={comments}/>*/}
      </div>
    </div>
  );
}

OfferPage.propTypes = {
  offer: offerCardProp,
};

export default OfferPage;
