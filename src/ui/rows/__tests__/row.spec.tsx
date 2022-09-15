import React from 'react';
import { screen, render } from '@testing-library/react';
import { Row } from '../row';

describe('Row', () => {
  it('should render correctly', () => {
    render(
      <Row data-testid="row">
        <span>1</span>
        <span>2</span>
      </Row>,
    );

    expect(screen.getByTestId('row')).toBeInTheDocument();
  });

  it('should render with expected grid-template-columns value', () => {
    render(
      <Row data-testid="row">
        <span>1</span>
        <span>2</span>
      </Row>,
    );

    const expectedStyle = 'grid-template-columns: repeat(2,1fr)';

    expect(screen.getByTestId('row')).toHaveStyle(expectedStyle);
  });
});
