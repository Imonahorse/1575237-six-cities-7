import React, {useState} from 'react';
import CommentRating from '../comment-rating/comment-rating.jsx';

function CommentForm() {
  const [state, setState] = useState({
    rating: '',
    review: '',
  });

  const isValid = !(state.rating.length && state.review.length);

  const onTextChange = (evt) => {
    const name = evt.currentTarget.name;
    setState({...state, [name]: evt.target.value});
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <CommentRating onTextChange={onTextChange}/>
      <textarea
        onChange={onTextChange}
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

export default CommentForm;
