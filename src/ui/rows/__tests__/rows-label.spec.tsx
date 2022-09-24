import React from 'react';
import { screen, render } from '@testing-library/react';
import { RowsLabel } from '../rows-label';

describe('RowLabel', () => {
  it('should render correctly', () => {
    render(<RowsLabel data-testid="row-label">Label</RowsLabel>);

    expect(screen.getByTestId('row-label')).toBeInTheDocument();
  });
});
