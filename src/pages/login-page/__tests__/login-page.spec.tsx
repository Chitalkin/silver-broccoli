jest.mock('@/hooks/use-local-storage', () => ({
  ...jest.requireActual('@/hooks/use-local-storage'),
  useLocalStorage: jest.fn(() => ['Ivan', jest.fn()]),
}));

import React from 'react';
import { useNavigate, MemoryRouter } from 'react-router-dom';
import { screen, render, renderHook } from '@testing-library/react';
import { LoginPage } from '../login-page';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { LocationDisplay } from '@/components/location-display';
import userEvent from '@testing-library/user-event';

describe('LoginPage', () => {
  it('should navigate to the game-page if name is exist', () => {
    render(
      <>
        <LocationDisplay />
        <LoginPage />
      </>,
      { wrapper: MemoryRouter },
    );
    renderHook(() => useNavigate(), {
      wrapper: MemoryRouter,
    });

    expect(useLocalStorage).toHaveBeenCalled();
    expect(screen.getByTestId('location-display')).toHaveTextContent('/game');
  });

  it('should navigate to the game-page after entering the name', async () => {
    const user = userEvent.setup();

    render(
      <>
        <LocationDisplay />
        <LoginPage />
      </>,
      { wrapper: MemoryRouter },
    );
    renderHook(() => useNavigate(), {
      wrapper: MemoryRouter,
    });

    expect(useLocalStorage).toHaveBeenCalled();
    expect(screen.getByTestId('location-display')).toHaveTextContent('/');

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    await user.type(input, 'Иван');
    await user.click(button);

    expect(screen.getByTestId('location-display')).toHaveTextContent('/game');
  });
});
