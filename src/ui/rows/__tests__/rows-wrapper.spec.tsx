import React from 'react';
import { screen, render } from '@testing-library/react';
import { RowsWrapper } from '../rows-wrapper';

describe('RowLabel', () => {
  it('should render correctly', () => {
    render(<RowsWrapper data-testid="row-wrapper">wrapper</RowsWrapper>);

    expect(screen.getByTestId('row-wrapper')).toBeInTheDocument();
  });
});
