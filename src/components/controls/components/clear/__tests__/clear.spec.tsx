jest.mock('@/store/reducers', () => ({
  ...jest.requireActual('@/store/reducers'),
  setGameStop: jest.fn(),
  resetGeneration: jest.fn(),
  setRandomFillPercentage: jest.fn(),
}));

import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '@/tests/utils';
import * as hooks from '@/store/hooks';
import { ControlClear } from '../clear';
import {
  resetGeneration,
  setGameStop,
  setRandomFillPercentage,
} from '@/store/reducers';

describe('ControlClear', () => {
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should render correctly', () => {
    renderWithProviders(<ControlClear />);
    const clearButton = screen.getByRole('button', { name: /clear/i });

    expect(clearButton).toBeInTheDocument();
  });

  it('should dispatch actions on click', async () => {
    const user = userEvent.setup();
    const mockDispatch = jest.fn();
    jest.spyOn(hooks, 'useDispatch').mockReturnValue(mockDispatch);
    renderWithProviders(<ControlClear />);

    const clearButton = screen.getByRole('button', { name: /clear/i });

    await user.click(clearButton);

    expect(setGameStop).toHaveBeenCalledTimes(1);
    expect(resetGeneration).toHaveBeenCalledTimes(1);
    expect(setRandomFillPercentage).toHaveBeenCalledTimes(1);
  });
});
