import React from 'react';
import PropTypes from 'prop-types';

const RatingCount = {
  PERFECT: {title: 'perfect', value: '5'},
  GOOD: {title: 'good', value: '4'},
  NOT_BAD: {title: 'not bad', value: '3'},
  BADLY: {title: 'badly', value: '2'},
  TERRIBLY: {title: 'terribly', value: '1'},
};

function CommentRating({onTextChange}) {
  return (
    <div className="reviews__rating-form form__rating">
      {Object.values(RatingCount).map((item) => {
        const {title, value} = item;
        return (
          <React.Fragment key={title}>
            <input
              onChange={onTextChange}
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
          </React.Fragment>);
      })}
    </div>
  );
}

CommentRating.propTypes = {
  onTextChange: PropTypes.func.isRequired,
};

export default CommentRating;
