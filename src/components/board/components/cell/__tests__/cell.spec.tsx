import React from 'react';
import { render, screen } from '@testing-library/react';
import { Cell } from '../cell';

describe('Cell', () => {
  it('should render correctly', () => {
    render(<Cell cell={22} />);

    expect(screen.getByText(22)).toBeInTheDocument();
  });
});
