import React from 'react';
import styled from 'styled-components';
import { CELL } from '@/styles/colors';
import { CellStatus } from '../../board-utils';

interface CellProps {
  rowIndex: number;
  cellIndex: number;
  population: CellStatus[][];
  onClick: (
    population: CellStatus[][],
    rowIndex: number,
    cellIndex: number,
  ) => void;
  status: CellStatus;
}

const StyledCell = styled.span<{ size: string; status: 1 | 0 }>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  background-color: ${(props) => (props.status ? CELL.primary : CELL.default)};

  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid ${CELL.border};
  border-top: 1px solid ${CELL.border};
  cursor: pointer;
`;

export const Cell = React.memo<CellProps>(
  ({ onClick, status, population, rowIndex, cellIndex }) => {
    const handleClick = () => {
      onClick(population, rowIndex, cellIndex);
    };

    return (
      <StyledCell
        data-testid="cell-component"
        onClick={handleClick}
        status={status}
        size="11px"
      />
    );
  },
);
