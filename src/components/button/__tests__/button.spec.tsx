import React from 'react';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '../button';

describe('Button', () => {
  it('should render correctly', () => {
    render(<Button />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should contain active class after click the button', async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();
    render(<Button onClick={onClick} />);

    const button = screen.getByRole('button');

    await user.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(button).toHaveClass('active');
  });

  it('should remove active class after 500ms', async () => {
    const user = userEvent.setup({ delay: null });
    jest.useFakeTimers();
    render(<Button resetAfter={500} />);
    const button = screen.getByRole('button');
    await user.click(button);

    act(() => {
      jest.runAllTimers();
    });

    expect(button).not.toHaveClass('active');
    jest.useRealTimers();
  });
});
