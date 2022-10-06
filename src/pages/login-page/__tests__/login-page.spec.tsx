import React from 'react';
import { useNavigate, MemoryRouter } from 'react-router-dom';
import { screen, renderHook } from '@testing-library/react';
import { LoginPage } from '../login-page';
import { LocationDisplay } from '@/components/location-display';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '@/tests/utils';

describe('LoginPage', () => {
  it('should navigate to the game-page if name is exist', () => {
    renderWithProviders(
      <>
        <LocationDisplay />
        <LoginPage />
      </>,
    );
    renderHook(() => useNavigate(), {
      wrapper: MemoryRouter,
    });

    expect(screen.getByTestId('location-display')).toHaveTextContent('/game');
  });

  it('should navigate to the game-page after entering the name', async () => {
    const user = userEvent.setup();

    renderWithProviders(
      <>
        <LocationDisplay />
        <LoginPage />
      </>,
    );
    renderHook(() => useNavigate(), {
      wrapper: MemoryRouter,
    });

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
