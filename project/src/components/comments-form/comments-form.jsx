import React, {useState} from 'react';
import CommentRating from '../comment-rating/comment-rating.jsx';
import {setComment} from '../../store/actions/api-actions.js';
import {useParams} from 'react-router-dom';
import Loading from '../loading/loading.jsx';
import styles from './comments-form.module.css';
import useError from '../../hooks/useError.js';
import {selectCommentStatus} from '../../store/reducer/app-data/selectors.js';
import {useSelector, useDispatch} from 'react-redux';

const MIN_LENGTH = 50;

function CommentsForm() {
  const [state, setState] = useState({
    review: '',
    rating: '',
  });

  const commentStatus = useSelector(selectCommentStatus);
  const dispatch = useDispatch();
  const isValid = !(state.rating.length && state.review.length && state.review.length >= MIN_LENGTH);

  const sendComment = (commentId, data) => {
    dispatch(setComment(commentId, data));
  };
  const onInputChange = (evt) => {
    const {name, value} = evt.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const {id} = useParams();
  const errorMessage = useError(commentStatus);

  const onSubmit = (evt) => {
    evt.preventDefault();

    const data = {comment: state.review, rating: state.rating};
    sendComment(id, data);
    setState({review: '', rating: ''});
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={onSubmit}>
      {errorMessage}
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <CommentRating onInputChange={onInputChange} isActive={state.rating}/>
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
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isValid}
        >
          {commentStatus.isLoading ? <Loading size={11} styleClass={styles.loading}/> : 'Submit'}
        </button>
      </div>
    </form>
  );
}

export default CommentsForm;
