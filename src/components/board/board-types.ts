import { EBoardSize } from './board-enums';

export type BoardSizeConfigItem = {
  rows: number;
  cells: number;
};

export type BoardSizeConfigs = {
  [k in EBoardSize]: BoardSizeConfigItem;
};
