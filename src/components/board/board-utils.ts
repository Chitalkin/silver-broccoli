import { BoardSizeConfigItem, EBoardSize, SettingsConfig } from '@/configs';

export const getCurrentBoardConfig = (size: EBoardSize): BoardSizeConfigItem =>
  SettingsConfig.boardSizeConfig[size];
