import React from 'react';
import {calcRating} from '../../utils.js';
import commentProp from './comment-prop.js';
import cn from 'classnames';

function Comment({comment}) {
  const {comment: text, date, id, rating, user} = comment;
  const {id: userId, avatarUrl, isPro, name} = user;
  const humanizeDate = date.split('T')[0];
  const avatarClass = cn('reviews__avatar-wrapper user__avatar-wrapper', {'user__avatar-wrapper--pro': isPro});

  return (
    <li className="reviews__item" id={id}>
      <div className="reviews__user user" id={userId}>
        <div className={avatarClass}>
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: calcRating(rating)}}>
            </span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {text}
        </p>
        <time className="reviews__time" dateTime={humanizeDate}>{humanizeDate}</time>
      </div>
    </li>
  );
}

Comment.propTypes = {
  comment: commentProp,
};

export default Comment;
