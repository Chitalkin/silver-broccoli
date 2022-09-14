import { BOARD_SIZE_CONFIGS } from '@/configs';
import { EBoardSize } from './board-enums';
import { BoardSizeConfigItem } from './board-types';

export const getCurrentBoardConfig = (size: EBoardSize): BoardSizeConfigItem =>
  BOARD_SIZE_CONFIGS[size];
