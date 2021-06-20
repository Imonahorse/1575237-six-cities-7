import React, {useState} from 'react';
import CommentRating from '../comment-rating/comment-rating.jsx';

const MIN_LENGTH = 50;

function CommentsForm() {
  const [state, setState] = useState({
    rating: '',
    review: '',
  });

  const isValid = !(state.rating.length && state.review.length && state.review.length >= MIN_LENGTH);

  const onInputChange = (evt) => {
    const {name, value} = evt.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <CommentRating onInputChange={onInputChange}/>
      <textarea
        onChange={onInputChange}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={state.review}
        required
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set
          <span className="reviews__star">rating</span>
          and describe your stay with at least
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isValid}>Submit</button>
      </div>
    </form>
  );
}

export default CommentsForm;
