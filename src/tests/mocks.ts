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

export const state: RootState = {
  user: {
    name: 'Ivan',
    isLogged: false,
  },
  config: {
    [ESettingsConfigItem.BoardSizeConfig]: BOARD_SIZE_CONFIGS[EBoardSize.Small],
    [ESettingsConfigItem.RandomFillPersentageConfig]:
      RANDOM_FILL_PERCENTAGE[ERandomPercentage.None],
    [ESettingsConfigItem.SimSpeedConfig]: SIM_SPEED_MS[ESimSpeed.Slow],
  },
  game: {
    generation: 10,
    isGameRunning: true,
    intervalId: 2,
    population: [
      [0, 1, 1],
      [0, 1, 1],
      [0, 0, 0],
    ],
  },
};
