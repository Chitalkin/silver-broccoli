import React, { useCallback } from 'react';
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
  :hover {
    opacity: 0.3;
  }
`;

export const Cell = React.memo<CellProps>(
  ({ onClick, status, population, rowIndex, cellIndex }) => {
    const handleClick = useCallback(() => {
      onClick(population, rowIndex, cellIndex);
    }, [cellIndex, onClick, population, rowIndex]);

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
