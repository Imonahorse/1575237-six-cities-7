import Comment from '../comment/comment.jsx';
import React from 'react';
import commentProp from '../comment/comment-prop.js';
import PropTypes from 'prop-types';

function CommentsList({comments}) {
  return (
    <ul className="reviews__list">
      {comments.map((comment) => <Comment comment={comment} key={comment.user.name + comment.id}/>)}
    </ul>
  );
}

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(commentProp).isRequired,
};

export default CommentsList;
