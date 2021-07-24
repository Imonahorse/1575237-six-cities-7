import React from 'react';
import {render} from '@testing-library/react';
import CommentRatingList from '../comment-rating-list/comment-rating-list.jsx';

describe('Component: CommentRatingList', () => {
  it('should render CommentRatingList', () => {
    const inputChangeHandle = jest.fn();
    const fakeValue = '3';

    const {isFragment} = render(<CommentRatingList onInputChange={inputChangeHandle} isActive={fakeValue}/>);

    expect(isFragment).toMatchSnapshot();
  });
});
