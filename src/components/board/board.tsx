import React from 'react';
import styled from 'styled-components';
import { BoardSizeConfigItem } from '@/configs';
import { usePopulation } from './board-hooks';
import { useSelector } from '@/store';
import { getBoardSize } from './board-selectors';

const BoardWrapper = styled.div<{ size: BoardSizeConfigItem }>`
  grid-template-columns: ${(props) => `repeat(${props.size.columns}, 1fr)`};
  grid-template-rows: ${(props) => `repeat(${props.size.rows}, 1fr)`};

  display: inline-grid;
  margin: auto;
`;

export const Board = React.memo(() => {
  const size = useSelector(getBoardSize);
  const population = usePopulation();

  return (
    <BoardWrapper data-testid="board-component" size={size}>
      {population}
    </BoardWrapper>
  );
});
