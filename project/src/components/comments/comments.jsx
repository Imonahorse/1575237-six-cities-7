import CommentsForm from '../comments-form/comments-form.jsx';
import CommentsItem from '../comments-item/comments-item.jsx';
import React from 'react';

function Comments() {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
      <ul className="reviews__list">
        <CommentsItem />
      </ul>
      <CommentsForm/>
    </section>
  );
}

export default Comments;
