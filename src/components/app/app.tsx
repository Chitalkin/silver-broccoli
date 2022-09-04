import React from 'react';
import { Board } from '../board';
import { EBoardSize } from '../board/board-enums';
import { Panel } from '../panel';
import './app.scss';

export const App: React.FC = () => (
  <div className="app">
    <Panel />
    <Board size={EBoardSize.Small} />
  </div>
);
