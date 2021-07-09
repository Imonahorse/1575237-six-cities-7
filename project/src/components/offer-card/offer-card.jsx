import React from 'react';
import {Link, useRouteMatch} from 'react-router-dom';
import offerCardProp from './offer-card-prop.js';
import cn from 'classnames';
import PropTypes from 'prop-types';
import {AppRoutes, AuthorizationStatus} from '../../const.js';
import {calcRating} from '../../utils.js';
import browserHistory from '../../services/browser-history.js';
import {setFavorite} from '../../store/actions/api-actions.js';
import {useDispatch, useSelector} from 'react-redux';
import {selectAuthorizationStatus} from '../../store/reducer/user-data/selectors.js';

const template = () => {
};
const ImageWidth = {
  mainWidth: '260px',
  favoritesWidth: '150px',
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
  const bookmarkClass = cn('place-card__bookmark-button button', {'place-card__bookmark-button--active': isFavorite});

  const isAuth = useSelector(selectAuthorizationStatus);
  const dispatch = useDispatch();
  const onFavoriteClick = () => {
    if (isAuth !== AuthorizationStatus.AUTH) {
      return browserHistory.push('/login');
    }

    if(!isFavorite) {
      return dispatch(setFavorite(id, 1));
    }
    if(isFavorite) {
      return dispatch(setFavorite(id, 0));
    }
  };

  const imageWidth = path === AppRoutes.FAVORITES ? ImageWidth.favoritesWidth : ImageWidth.mainWidth;

  return (
    <article
      onMouseEnter={() => handleActiveCard(id)}
      onMouseLeave={() => handleActiveCard(0)}
      className={articleClass}
      id={id}
    >
      <div className={imageClass}>
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" style={{width: imageWidth}} src={previewImage} width="260" height="200" alt="preview"/>
        </Link>
      </div>
      <div className={infoClass}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={bookmarkClass} type="button" onClick={onFavoriteClick}>
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark">
              </use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: calcRating(rating)}}>
            </span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${price}`}>{title}</Link>
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

export default OfferCard;
