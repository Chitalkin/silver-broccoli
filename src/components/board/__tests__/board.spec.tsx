import React from 'react';
import { screen } from '@testing-library/react';
import { Board } from '../board';
import { renderWithProviders } from '@/tests/utils';

describe('Board', () => {
  it('should render correctly', () => {
    renderWithProviders(<Board />);

    expect(screen.getByTestId('board-component')).toBeInTheDocument();
  });
});
