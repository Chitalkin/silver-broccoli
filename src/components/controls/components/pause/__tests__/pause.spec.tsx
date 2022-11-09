jest.mock('@/reducers', () => ({
  ...jest.requireActual('@/reducers'),
  setGameStop: jest.fn(),
}));

import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '@/tests/utils';
import * as hooks from '@/store/hooks';
import { setGameStop } from '@/reducers';
import { RootState } from '@/store';
import { ControlPause } from '../pause';

describe('ControlPause', () => {
  afterAll(() => {
    jest.restoreAllMocks();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    renderWithProviders(<ControlPause />);
    const pauseButton = screen.getByRole('button', { name: /Pause/i });

    expect(pauseButton).toBeInTheDocument();
  });

  it('should dispatch setGameStop on click if isGameRunning is true', async () => {
    const user = userEvent.setup();
    const mockDispatch = jest.fn();
    jest.spyOn(hooks, 'useDispatch').mockReturnValue(mockDispatch);
    renderWithProviders(<ControlPause />, {
      preloadedState: { game: { isGameRunning: true } } as RootState,
    });
    const pauseButton = screen.getByRole('button', { name: /pause/i });

    await user.click(pauseButton);
    expect(setGameStop).toHaveBeenCalledTimes(1);
  });

  it('should not dispatch setGameStop on click if isGameRunning is false', async () => {
    const user = userEvent.setup();
    const mockDispatch = jest.fn();
    jest.spyOn(hooks, 'useDispatch').mockReturnValue(mockDispatch);
    renderWithProviders(<ControlPause />);
    const pauseButton = screen.getByRole('button', { name: /pause/i });

    await user.click(pauseButton);
    expect(setGameStop).not.toHaveBeenCalled();
  });
});
