import React from 'react';
import { render, screen } from '@testing-library/react';
import { Cell } from '../cell';

describe('Cell', () => {
  it('should render correctly', () => {
    render(<Cell size="40px" />);

    expect(screen.getByTestId(/cell-component/)).toBeInTheDocument();
  });
});
