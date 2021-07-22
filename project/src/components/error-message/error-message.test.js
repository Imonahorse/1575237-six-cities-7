import React from 'react';
import ErrorMessage from './error-message.jsx';
import {MemoryRouter} from 'react-router-dom';
import {render} from '@testing-library/react';

describe('Component: ErrorMessage', () => {
  it('should render correctly', () => {
    const {getByText} = render(
      <MemoryRouter>
        <ErrorMessage/>
      </MemoryRouter>,
    );

    expect(getByText('Сервер не отвечает, попробуйте позже')).toBeInTheDocument();
  });
});
