import Mark from '../mark/mark.jsx';
import {calcRating} from '../../utils.js';
import Host from '../host/host.jsx';
import React from 'react';
import offerCardProp from '../offer-card/offer-card-prop.js';
import Comments from '../comments/comments.jsx';
import commentProp from '../comment/comment-prop.js';
import {selectAuthorizationStatus} from '../../store/reducer/user-data/selectors.js';
import {useSelector, useDispatch} from 'react-redux';
import {AuthorizationStatus} from '../../const.js';
import browserHistory from '../../services/browser-history';
import {setFavorite} from '../../store/actions/api-actions.js';
import cn from 'classnames';
import PropTypes from 'prop-types';

function OfferPage({offer, comments, id}) {
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
    isFavorite,
  } = offer;
  const bookmarkClass = cn('property__bookmark-button button', {'property__bookmark-button--active': isFavorite});

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

  return (
    <div className="property__container container">
      <div className="property__wrapper">
        {isPremium && <Mark/>}
        <div className="property__name-wrapper">
          <h1 className="property__name">
            {title}
          </h1>
          <button className={bookmarkClass} type="button" onClick={onFavoriteClick}>
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
        <Comments comments={comments}/>
      </div>
    </div>
  );
}

OfferPage.propTypes = {
  offer: offerCardProp,
  comments: commentProp,
  id: PropTypes.string.isRequired,
};

export default OfferPage;
