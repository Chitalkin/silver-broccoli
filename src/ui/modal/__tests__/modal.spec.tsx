import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Modal } from '../modal';

describe('Modal', () => {
  const onClose = jest.fn();

  afterEach(() => {
    onClose.mockClear();
  });

  it('should render correctly with children', () => {
    render(
      <Modal onClose={onClose} visible={true}>
        <button>button</button>
      </Modal>,
    );

    expect(screen.getByTestId('base-modal-overlay')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /button/ })).toBeInTheDocument();
  });

  it('should call onClose click on overlay ', async () => {
    const user = userEvent.setup();
    render(
      <Modal onClose={onClose} visible={true}>
        <button>button</button>
      </Modal>,
    );

    const overlay = screen.getByTestId('base-modal-overlay');
    expect(overlay).toBeInTheDocument();

    await user.click(overlay);

    expect(onClose).toBeCalledTimes(1);
  });

  it('should not call onClose after click on content', async () => {
    const user = userEvent.setup();
    render(
      <Modal onClose={onClose} visible={true}>
        <button>button</button>
      </Modal>,
    );
    const button = screen.getByRole('button', { name: /button/ });

    await user.click(button);

    expect(onClose).not.toHaveBeenCalled();
  });

  it('should contain pointer-events as "initial" if visible is true', () => {
    render(
      <Modal onClose={onClose} visible={true}>
        <button>button</button>
      </Modal>,
    );

    const overlay = screen.getByTestId('base-modal-overlay');

    expect(overlay).toBeInTheDocument();
    expect(overlay).toHaveStyle('pointer-events: initial');
  });

  it('should contain pointer-events as "none" if visible is false', () => {
    render(
      <Modal onClose={onClose} visible={false}>
        <button>button</button>
      </Modal>,
    );

    const overlay = screen.getByTestId('base-modal-overlay');

    expect(overlay).toBeInTheDocument();
    expect(overlay).toHaveStyle('pointer-events: none');
  });
});
