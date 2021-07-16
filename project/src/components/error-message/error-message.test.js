import React from 'react';
import ErrorMessage from './error-message.jsx';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render} from '@testing-library/react';

describe('Component: ErrorMessage', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const {getByText} = render(
      <Router history={history}>
          <ErrorMessage/>
        </Router>
    );

    const pElement = getByText('Сервер не отвечает, попробуйте позже');

    expect(pElement).toBeInTheDocument();
  })
});
