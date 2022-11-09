import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { Cell } from '../cell';
import { CELL } from '@/styles/colors';

describe('Cell', () => {
  const mockHandleClick = jest.fn();

  afterEach(() => {
    mockHandleClick.mockReset();
  });

  it('should render correctly', () => {
    render(
      <Cell rowIndex={0} cellIndex={0} onClick={mockHandleClick} status={0} />,
    );

    expect(screen.getByTestId(/cell-component/)).toBeInTheDocument();
  });

  it('should call handler on click', async () => {
    const user = userEvent.setup();
    render(
      <Cell rowIndex={0} cellIndex={0} onClick={mockHandleClick} status={0} />,
    );

    const cell = screen.getByTestId(/cell-component/);
    await user.click(cell);
    expect(mockHandleClick).toBeCalledTimes(1);
  });

  it('should contain primary color if the status is 1', async () => {
    render(
      <Cell rowIndex={0} cellIndex={0} onClick={mockHandleClick} status={1} />,
    );
    const cell = screen.getByTestId(/cell-component/);

    expect(cell).toHaveStyle(`background-color: ${CELL.primary}`);
  });
});
