import React from 'react';
import { render, screen } from '@testing-library/react';
import { Controls } from '../controls';

describe('Counter', () => {
  it('should render corectly', () => {
    render(<Controls />);

    expect(screen.getByTestId(/controls-element/)).toBeInTheDocument();
  });
});
