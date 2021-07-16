import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import CommentRating from './comment-rating.jsx';


let history = null;
let mockStore = null;

describe('Component: Cities', () => {
  beforeAll(()=>{
    mockStore = configureStore({});
    history = createMemoryHistory();
  });

  it('should render CommentRating', () => {
    const fakeFn = ()=>{} ;
    const fakeValue = '3';
    const ratingCount = 5;

    render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <CommentRating onInputChange={fakeFn} isActive={fakeValue}/>
        </Router>
      </Provider>,
    );

    expect(screen.getAllByTestId('test')).toHaveLength(ratingCount);
  });
});
