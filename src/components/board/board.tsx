import React from 'react';
import styled from 'styled-components';
import { BoardSizeConfigItem, ESettingsConfigItem } from '@/configs';
import { useCells } from './board-hooks';
import { useSelector } from '@/store';

const BoardWrapper = styled.div<{ size: BoardSizeConfigItem }>`
  grid-template-columns: ${(props) => `repeat(${props.size.columns}, 1fr)`};
  grid-template-rows: ${(props) => `repeat(${props.size.rows}, 1fr)`};

  display: inline-grid;
  margin: auto;
`;

export const Board = React.memo(() => {
  const size = useSelector(
    (state) => state.config[ESettingsConfigItem.BoardSizeConfig],
  );
  const cells = useCells();

  return (
    <BoardWrapper data-testid="board-component" size={size}>
      {cells}
    </BoardWrapper>
  );
});
