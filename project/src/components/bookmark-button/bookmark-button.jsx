import {useDispatch, useSelector} from 'react-redux';
import {selectAuthorizationStatus} from '../../store/reducer/user-data/selectors.js';
import {AppRoutes, AuthorizationStatus} from '../../const.js';
import browserHistory from '../../services/browser-history.js';
import {setFavorite} from '../../store/actions/api-actions.js';
import cn from 'classnames';
import React from 'react';
import {useRouteMatch} from 'react-router-dom';
import PropTypes from 'prop-types';

const SvgOfferSize = {
  WIDTH: '31',
  HEIGHT: '33',
};
const SvgMainSize = {
  WIDTH: '18',
  HEIGHT: '19',
};

function BookmarkButton({id, isFavorite}) {
  const isAuth = useSelector(selectAuthorizationStatus);
  const dispatch = useDispatch();
  const {path} = useRouteMatch();
  const bookmarkButtonClass = cn(
    {
      'property__bookmark-button button': path === AppRoutes.OFFER,
      'property__bookmark-button--active': path === AppRoutes.OFFER && isFavorite,
    },
    {
      'place-card__bookmark-button button': path === AppRoutes.MAIN || path === AppRoutes.FAVORITES,
      'place-card__bookmark-button--active': isFavorite && (path === AppRoutes.MAIN || path === AppRoutes.FAVORITES),
    },
  );

  const bookmarkSvgClass = cn(
    {'property__bookmark-icon': path === AppRoutes.OFFER},
    {'place-card__bookmark-icon': path === AppRoutes.MAIN || path === AppRoutes.FAVORITES},
  );

  const svgStyle = {
    width: path === AppRoutes.OFFER ? SvgOfferSize.WIDTH : SvgMainSize.WIDTH,
    height: path === AppRoutes.OFFER ? SvgOfferSize.HEIGHT : SvgMainSize.HEIGHT,
  };

  const spanStyle = path === AppRoutes.OFFER ? 'To bookmarks' : 'In Bookmarks';

  const onFavoriteClick = () => {
    if (isAuth !== AuthorizationStatus.AUTH) {
      return browserHistory.push('/login');
    }

    return dispatch(setFavorite(id, Number(!isFavorite)));
  };

  return (
    <button className={bookmarkButtonClass} type="button" onClick={onFavoriteClick}>
      <svg className={bookmarkSvgClass} style={svgStyle}>
        <use xlinkHref="#icon-bookmark">
        </use>
      </svg>
      <span className="visually-hidden">{spanStyle}</span>
    </button>
  );
}

BookmarkButton.propTypes = {
  id: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
};

export default BookmarkButton;
