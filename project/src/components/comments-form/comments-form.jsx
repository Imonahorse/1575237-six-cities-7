import React, {useState} from 'react';
import CommentRating from '../comment-rating/comment-rating.jsx';
import {connect} from 'react-redux';
import {setComment} from '../../store/api-actions.js';
import {useParams} from 'react-router-dom';
import Loading from '../loading/loading.jsx';
import styles from './comments-form.module.css';
import PropTypes from 'prop-types';
import useError from '../../hooks/useError.js';
import {getCommentStatus} from '../../store/reducer/app-data/selectors.js';

const MIN_LENGTH = 50;

function CommentsForm({sendComment, commentStatus}) {
  const [state, setState] = useState({
    review: '',
    rating: '',
  });

  const isValid = !(state.rating.length && state.review.length && state.review.length >= MIN_LENGTH);

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

CommentsForm.propTypes = {
  sendComment: PropTypes.func.isRequired,
  commentStatus: PropTypes.shape({
    isLoading: PropTypes.string.isRequired,
    isSuccess: PropTypes.string.isRequired,
    isError: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  commentStatus: getCommentStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  sendComment(id, data) {
    dispatch(setComment(id, data));
  },
});

export {CommentsForm};
export default connect(mapStateToProps, mapDispatchToProps)(CommentsForm);
