import { EBoardSize } from './board-enums';

export type BoardSizeConfigItem = {
  rows: number;
  columns: number;
};

export type BoardSizeConfigs = {
  [k in EBoardSize]: BoardSizeConfigItem;
};
