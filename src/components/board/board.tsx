import React from 'react';
import styled from 'styled-components';
import { BoardSizeConfigItem } from '@/configs';
import { useCells } from './board-hooks';

interface BoardProps {
  size: BoardSizeConfigItem;
  percentage: number;
}

const BoardWrapper = styled.div<Omit<BoardProps, 'percentage'>>`
  grid-template-columns: ${(props) => `repeat(${props.size.columns}, 1fr)`};
  grid-template-rows: ${(props) => `repeat(${props.size.rows}, 1fr)`};

  display: inline-grid;
  margin: auto;
`;

export const Board = React.memo<BoardProps>(({ size, percentage }) => {
  const cells = useCells(size, percentage);

  return (
    <BoardWrapper data-testid="board-component" size={size}>
      {cells}
    </BoardWrapper>
  );
});
