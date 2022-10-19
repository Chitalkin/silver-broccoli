import React from 'react';
import { screen } from '@testing-library/react';
import { Counter } from '../counter';
import { renderWithProviders } from '@/tests/utils';
import { mockState } from '@/tests/mocks';

describe('Counter', () => {
  it('should render corectly', () => {
    renderWithProviders(<Counter />);

    expect(screen.getByText(mockState.game.generation)).toBeInTheDocument();
  });
});
