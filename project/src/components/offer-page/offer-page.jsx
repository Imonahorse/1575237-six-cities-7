import Mark from '../mark/mark.jsx';
import {calcRating} from '../../utils.js';
import Host from '../host/host.jsx';
import React from 'react';
import offerCardProp from '../offer-card/offer-card-prop.js';
import Comments from '../comments/comments.jsx';
import commentProp from '../comment/comment-prop.js';
import PropTypes from 'prop-types';
import BookmarkButton from '../bookmark-button/bookmark-button.jsx';

function OfferPage({offer, comments, id}) {
  const {
    isPremium,
    price,
    title,
    type,
    rating,
    bedrooms,
    maxAdults,
    goods,
    host,
    description,
    isFavorite,
  } = offer;

  return (
    <div className="property__container container" data-testid="offer-page component">
      <div className="property__wrapper">
        {isPremium && <Mark/>}
        <div className="property__name-wrapper">
          <h1 className="property__name">
            {title}
          </h1>
          <BookmarkButton id={id} isFavorite={isFavorite}/>
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
            {bedrooms} Bedrooms
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
            {goods.map((good) => (
              <li className="property__inside-item" key={good + price}>
                {good}
              </li>),
            )}
          </ul>
        </div>
        <Host host={host} description={description}/>
        <Comments comments={comments}/>
      </div>
    </div>
  );
}

OfferPage.propTypes = {
  offer: offerCardProp,
  comments: PropTypes.arrayOf(commentProp),
  id: PropTypes.string.isRequired,
};

export default OfferPage;
