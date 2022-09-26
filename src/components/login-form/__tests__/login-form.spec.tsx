import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LoginForm } from '../login-form';

describe('LoginForm', () => {
  let onSubmit: jest.Mock;

  beforeEach(() => {
    onSubmit = jest.fn();
  });

  it('should render correctly', () => {
    render(<LoginForm onSubmit={onSubmit} />);

    expect(screen.getByTestId('login-form-component')).toBeInTheDocument();
  });

  it('should contain name input', () => {
    render(<LoginForm onSubmit={onSubmit} />);
    const input = screen.getByPlaceholderText(/your name/i);

    expect(input).toBeInTheDocument();
  });

  it('should contain submit button', () => {
    render(<LoginForm onSubmit={onSubmit} />);
    const button = screen.getByRole('button', { name: /start/i });

    expect(button).toBeInTheDocument();
  });

  it('should submit form with an expected data', async () => {
    const user = userEvent.setup();
    render(<LoginForm onSubmit={onSubmit} />);

    const input = screen.getByPlaceholderText(/your name/i);
    const button = screen.getByRole('button', { name: /start/i });

    await user.type(input, 'Иван');
    await user.click(button);

    expect(onSubmit).toBeCalledWith({ name: 'Иван' });
  });
});
