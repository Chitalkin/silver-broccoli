import React from 'react';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BUTTON } from '@/styles/colors';
import { Button, ButtonWithTimer } from '../button';

describe('Button', () => {
  it('should render correctly', () => {
    render(<Button />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should call onClick once after click the button', async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();
    render(<Button onClick={onClick} />);

    const button = screen.getByRole('button');

    await user.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should change background after click', async () => {
    const user = userEvent.setup();
    render(<ButtonWithTimer active />);
    const button = screen.getByRole('button');

    await user.click(button);

    expect(button).toHaveStyle(`background-color: ${BUTTON.primary}`);
  });

  it('should contain default background after 500ms with "resetAfter=500"', async () => {
    const user = userEvent.setup({ delay: null });
    jest.useFakeTimers();
    render(<ButtonWithTimer resetAfter={500} />);
    const button = screen.getByRole('button');

    await user.click(button);

    expect(button).toHaveStyle(`background-color: ${BUTTON.primary}`);

    act(() => {
      jest.runAllTimers();
    });

    expect(button).toHaveStyle(`background-color: ${BUTTON.default}`);
    jest.useRealTimers();
  });
});
