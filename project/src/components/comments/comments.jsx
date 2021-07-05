import CommentsForm from '../comments-form/comments-form.jsx';
import CommentsList from '../comments-list/comments-list.jsx';
import React from 'react';
import commentProp from '../comment/comment-prop.js';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {AuthorizationStatus} from '../../const.js';

function Comments({comments, authStatus}) {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <CommentsList comments={comments}/>
      {authStatus === AuthorizationStatus.AUTH && <CommentsForm/>}
    </section>
  );
}

Comments.propTypes = {
  comments: PropTypes.arrayOf(commentProp).isRequired,
  authStatus: PropTypes.string.isRequired,
};

const mapStateToProps=(state)=> ({
  authStatus: state.authorizationStatus,
});

export {Comments};
export default connect(mapStateToProps)(Comments);
