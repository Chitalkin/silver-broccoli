import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '@/tests/utils';
import { Controls } from '../controls';

describe('Controls', () => {
  it('should render correctly', () => {
    renderWithProviders(<Controls />);
    expect(screen.getByTestId(/controls-component/)).toBeInTheDocument();
  });
});
