import React from 'react';
import {render, screen} from '@testing-library/react';
import CommentRatingList from '../comment-rating-list/comment-rating-list.jsx';
import userEvent from "@testing-library/user-event";

describe('Component: CommentRatingList', () => {
  it('should render CommentRatingList', () => {
    const inputChangeHandle = jest.fn();
    const fakeValue = '3';

    render(<CommentRatingList onInputChange={inputChangeHandle} isActive={fakeValue}/>);

    const radios = screen.getAllByRole('radio');
    expect(radios).toHaveLength(5);
    expect(radios[2]).toBeChecked();

    userEvent.click(radios[0]);
    expect(inputChangeHandle).toHaveBeenCalledWith();
  });
});
