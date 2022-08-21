import React from 'react';
import { useCells } from './board-hooks';
import { EBoardSize } from './board-enums';
import { getCurrentBoardConfig } from './board-utils';
import './board.css';

interface BoardProps {
  size?: EBoardSize;
}

export const Board: React.FC<BoardProps> = ({ size = EBoardSize.Medium }) => {
  const config = getCurrentBoardConfig(size);
  const table = useCells(config);

  const styles = {
    gridTemplateColumns: `repeat(${config.cells}, 1fr)`,
    gridTemplateRows: `repeat(${config.rows}), 1fr`,
  };

  return (
    <div aria-label="main-board" className="board" style={styles}>
      {table}
    </div>
  );
};
