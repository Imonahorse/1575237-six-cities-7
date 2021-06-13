import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const RatingCount = {
  5: 'perfect',
  4: 'good',
  3: 'not bad',
  2: 'badly',
  1: 'terribly',
};

function CommentRating({onInputChange}) {
  return (
    <div className="reviews__rating-form form__rating">
      {Object.entries(RatingCount).reverse().map(([value, title]) => (
        <Fragment key={title}>
          <input
            onChange={onInputChange}
            className="form__rating-input visually-hidden"
            name="rating"
            value={value}
            id={value <= 1 ? `${value}-star` : `${value}-stars`}
            type="radio"
            required
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
};

export default CommentRating;
