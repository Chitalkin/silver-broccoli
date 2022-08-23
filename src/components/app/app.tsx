import React from 'react';
import { Board } from '../board';
import { EBoardSize } from '../board/board-enums';
import './app.scss';

export const App: React.FC = () => <Board size={EBoardSize.Small} />;
