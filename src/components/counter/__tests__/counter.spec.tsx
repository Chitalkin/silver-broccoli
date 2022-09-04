import React from 'react';
import { render, screen } from '@testing-library/react';
import { Counter } from '../counter';

describe('Counter', () => {
  it('should render corectly', () => {
    render(<Counter count={43} />);

    expect(screen.getByText('43')).toBeInTheDocument();
  });
});
