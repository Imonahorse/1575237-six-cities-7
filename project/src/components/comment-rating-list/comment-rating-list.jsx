import React from 'react';
import PropTypes from 'prop-types';
import CommentRatingItem from '../comment-rating-item/comment-rating-item.jsx';

const RatingCount = {
  5: 'perfect',
  4: 'good',
  3: 'not bad',
  2: 'badly',
  1: 'terribly',
};

function CommentRatingList({onInputChange, isActive}) {
  return (
    <div className="reviews__rating-form form__rating">
      {Object.entries(RatingCount).reverse().map(([value, title]) => (
        <CommentRatingItem onInputChange={onInputChange} isActive={isActive} title={title} value={value} key={value}/>
        )
      )}
    </div>
  );
}

CommentRatingList.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  isActive: PropTypes.string.isRequired,
};

export default CommentRatingList;
