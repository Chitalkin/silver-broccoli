import React, { useState } from 'react';
import cn from 'classnames';
import './cell.css';

interface CellProps {
  cell: number;
}

export const Cell: React.FC<CellProps> = ({ cell }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const classes = cn('cell', { active });

  return (
    <span aria-label="board-cell" onClick={handleClick} className={classes}>
      {cell}
    </span>
  );
};
