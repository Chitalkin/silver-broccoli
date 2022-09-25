import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Header } from '../header';

describe('Header', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const logout = jest.fn();

  it('should render correctly', () => {
    render(<Header logout={logout} name="Ivan" />);

    expect(screen.getByTestId('header-component')).toBeInTheDocument();
  });

  it('should show the username', () => {
    render(<Header logout={logout} name="Ivan" />);

    expect(screen.getByText(/ivan/i)).toBeInTheDocument();
  });

  it('should call logout after click the logout button', async () => {
    const user = userEvent.setup();
    render(<Header logout={logout} name="Ivan" />);

    const button = screen.getByRole('button', { name: /logout/i });

    await user.click(button);

    expect(logout).toHaveBeenCalledTimes(1);
  });
});
