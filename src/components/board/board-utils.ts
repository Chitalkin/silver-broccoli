import { EBoardSize } from './board-enums';
import { BoardSizeConfigItem } from './board-types';
import { BOARD_SIZE_CONFIGS } from './board-constants';

export const getCurrentBoardConfig = (size: EBoardSize): BoardSizeConfigItem =>
  BOARD_SIZE_CONFIGS[size];
