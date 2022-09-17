import React from 'react';
import { screen, render } from '@testing-library/react';
import { EBoardSize } from '@/configs';
import { Board } from '../board';

describe('Board', () => {
  it('should render correctly', () => {
    render(<Board size={EBoardSize.Small} />);

    expect(screen.getByTestId('board-component')).toBeInTheDocument();
  });

  it('should contain expected number of elements', () => {
    render(<Board size={EBoardSize.Small} />);

    expect(screen.getAllByTestId('cell-component')).toHaveLength(1500);
  });
});
