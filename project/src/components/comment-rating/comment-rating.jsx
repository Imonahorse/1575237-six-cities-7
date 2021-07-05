import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const RatingCount = {
  5: 'perfect',
  4: 'good',
  3: 'not bad',
  2: 'badly',
  1: 'terribly',
};

function CommentRating({onInputChange, isActive}) {
  return (
    <div className="reviews__rating-form form__rating">
      {Object.entries(RatingCount).reverse().map(([value, title]) => (
        <Fragment key={value}>
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
        </Fragment>),
      )}
    </div>
  );
}

CommentRating.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  isActive: PropTypes.string.isRequired,
};

export default CommentRating;
