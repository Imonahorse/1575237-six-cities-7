import React from 'react';
import {render, screen} from '@testing-library/react';
import Mark from './mark.jsx';

describe('Component: Mark', () => {
  it('should render Mark', () => {
    render(<Mark/>);

    expect(screen.getByText(/Premium/i)).toBeInTheDocument();
  });
});
