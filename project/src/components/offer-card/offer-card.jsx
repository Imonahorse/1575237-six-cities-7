import React from 'react';
import {Link} from 'react-router-dom';
import mainProp from '../../pages/main/main-prop.js';
import cn from 'classnames';
import PropTypes from 'prop-types';

function OfferCard({offer, onHoverCard}) {
  const {price, title, type, previewImage, id, isFavorite} = offer;
  const {src, alt} = previewImage;
  const bookmarkClass = cn('place-card__bookmark-button button', {'place-card__bookmark-button--active' : isFavorite});

  return (
    <article onMouseEnter={(evt)=> onHoverCard(evt)} className="cities__place-card place-card" id={id}>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to="/offer">
          <img className="place-card__image" src={src} width="260" height="200" alt={alt}/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={bookmarkClass} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="/#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

OfferCard.propTypes = {
  offer: mainProp,
  onHoverCard: PropTypes.func.isRequired,
};

export default OfferCard;
