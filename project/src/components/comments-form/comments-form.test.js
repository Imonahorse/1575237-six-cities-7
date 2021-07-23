import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import CommentsForm from './comments-form.jsx';
import userEvent from '@testing-library/user-event';

let store = null;
let history = null;
let component = null;

describe('Component: CommentsForm', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    const fakeStore = configureStore({});

    store = fakeStore({
      DATA: {
        commentStatus: {
          isLoading: false,
          isError: false,
          isSuccess: false,
        },
      },
    });

    component = (
      <Provider store={store}>
        <Router history={history}>
          <CommentsForm/>
        </Router>
      </Provider>
    )
  });

  it('should render "CommentsForm"', () => {

    render(component);

    expect(screen.getByText(/To submit review please make sure to set/i)).toBeInTheDocument();
    userEvent.type(screen.getByLabelText('Your review'), 'test');
    expect(screen.getByDisplayValue(/test/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('should test form with right comment length', () => {
    const fakeComment = 'hateTestshateTestshateTestshateTestshateTestshateTestshateTestshateTestshateTestshateTests';

    const {rerender} = render(component);

    const ratingButtons = screen.getAllByRole('radio');
    userEvent.click(ratingButtons[2]);
    userEvent.type(screen.getByLabelText('Your review'), fakeComment);

    rerender(component)

    expect(screen.getByRole('button')).toBeEnabled();
  });
});
