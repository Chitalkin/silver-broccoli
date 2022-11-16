jest.mock('@/store/reducers', () => ({
  ...jest.requireActual('@/store/reducers'),
  setGameStart: jest.fn(),
}));

import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '@/tests/utils';
import { setGameStart } from '@/store/reducers';
import * as hooks from '@/store/hooks';
import { RootState } from '@/store';
import { ControlRun } from '../run';

describe('ControlRun', () => {
  afterAll(() => {
    jest.restoreAllMocks();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    renderWithProviders(<ControlRun />);
    const runButton = screen.getByRole('button', { name: /run/i });

    expect(runButton).toBeInTheDocument();
  });

  it('should dispatch setGameStart on click if isGameRunning is false', async () => {
    const user = userEvent.setup();
    const mockDispatch = jest.fn();
    jest.spyOn(hooks, 'useDispatch').mockReturnValue(mockDispatch);
    renderWithProviders(<ControlRun />);

    const pauseButton = screen.getByRole('button', { name: /run/i });

    await user.click(pauseButton);

    expect(setGameStart).toHaveBeenCalledTimes(1);
  });

  it('should not dispatch setGameStart on click if isGameRunning is true', async () => {
    const user = userEvent.setup();
    const mockDispatch = jest.fn();
    jest.spyOn(hooks, 'useDispatch').mockReturnValue(mockDispatch);
    renderWithProviders(<ControlRun />, {
      preloadedState: { game: { isGameRunning: true } } as RootState,
    });

    const pauseButton = screen.getByRole('button', { name: /run/i });

    await user.click(pauseButton);

    expect(setGameStart).not.toHaveBeenCalled();
  });
});
