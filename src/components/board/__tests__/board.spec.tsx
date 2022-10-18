import React from 'react';
import { screen, render } from '@testing-library/react';
import { BOARD_SIZE_CONFIGS, EBoardSize } from '@/configs';
import * as hooks from '@/store/hooks';
import { Board } from '../board';

describe('Board', () => {
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should render correctly', () => {
    jest
      .spyOn(hooks, 'useSelector')
      .mockReturnValue(BOARD_SIZE_CONFIGS[EBoardSize.Small]);

    render(<Board />);

    expect(screen.getByTestId('board-component')).toBeInTheDocument();
  });
});
