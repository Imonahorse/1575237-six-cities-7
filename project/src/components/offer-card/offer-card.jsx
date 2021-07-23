import React, {memo} from 'react';
import {Link, useRouteMatch, generatePath} from 'react-router-dom';
import offerCardProp from './offer-card-prop.js';
import cn from 'classnames';
import PropTypes from 'prop-types';
import {AppRoutes} from '../../const.js';
import {calcRating} from '../../utils.js';
import BookmarkButton from '../bookmark-button/bookmark-button.jsx';

const template = () => {
};
const ImageWidth = {
  mainWidth: '260px',
  favoritesWidth: '150px',
};
const ImageHeight = {
  mainHeight: '200px',
  favoritesHeight: '110px',
};

function OfferCard({offer, handleActiveCard = template}) {
  const {price, title, type, id, isFavorite, previewImage, rating} = offer;
  const {path} = useRouteMatch();

  const imageClass = cn('place-card__image-wrapper', {
    'cities__image-wrapper': path === AppRoutes.MAIN,
    'favorites__image-wrapper': path === AppRoutes.FAVORITES,
  });
  const articleClass = cn('place-card', {
    'cities__place-card': path === AppRoutes.MAIN,
    'favorites__card': path === AppRoutes.FAVORITES,
    'near-places__card': path === AppRoutes.OFFER,
  });
  const infoClass = cn('place-card__info', {'favorites__card-info': path === AppRoutes.FAVORITES});
  const imageWidth = path === AppRoutes.FAVORITES ? ImageWidth.favoritesWidth : ImageWidth.mainWidth;
  const imageHeight = path === AppRoutes.FAVORITES ? ImageHeight.favoritesHeight : ImageHeight.mainHeight;

  return (
    <article
      onMouseEnter={() => handleActiveCard(id)}
      onMouseLeave={() => handleActiveCard(0)}
      className={articleClass}
      id={id}
      data-testid="offer card"
    >
      {
        isFavorite &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className={imageClass}>
        <Link to={generatePath(AppRoutes.OFFER, {id: id})}>
          <img className="place-card__image" style={{width: imageWidth, height: imageHeight}} src={previewImage} width="260" height="200"
               alt="preview"/>
        </Link>
      </div>
      <div className={infoClass}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarkButton id={id.toString()} isFavorite={isFavorite}/>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: calcRating(rating)}}>
            </span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={generatePath(AppRoutes.OFFER, {id: id})}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

OfferCard.propTypes = {
  offer: offerCardProp,
  handleActiveCard: PropTypes.func,
};

export default memo(OfferCard);
