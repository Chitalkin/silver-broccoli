import {
  BOARD_SIZE_CONFIGS,
  EBoardSize,
  ERandomPercentage,
  ESettingsConfigItem,
  ESimSpeed,
  RANDOM_FILL_PERCENTAGE,
  SIM_SPEED_MS,
} from '@/configs';
import type { RootState } from '@/store';

export const mockState: RootState = {
  user: {
    name: 'Ivan',
  },
  config: {
    [ESettingsConfigItem.BoardSizeConfig]: BOARD_SIZE_CONFIGS[EBoardSize.Small],
    [ESettingsConfigItem.RandomFillPersentageConfig]:
      RANDOM_FILL_PERCENTAGE[ERandomPercentage.None],
    [ESettingsConfigItem.SimSpeedConfig]: SIM_SPEED_MS[ESimSpeed.Slow],
  },
  game: {
    generation: 10,
    isGameRunning: false,
  },
};
