import React from 'react';
import PropTypes from 'prop-types';

function CommentRatingItem({onInputChange, isActive, title, value}) {
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        onChange={onInputChange}
        name="rating"
        value={value}
        id={value <= 1 ? `${value}-star` : `${value}-stars`}
        type="radio"
        required
        checked={isActive === value}
      />
      <label
        htmlFor={value <= 1 ? `${value}-star` : `${value}-stars`}
        className="reviews__rating-label form__rating-label"
        title={title}
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star">
          </use>
        </svg>
      </label>
    </>
  );
}

CommentRatingItem.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  isActive: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default CommentRatingItem;
