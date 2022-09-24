import React from 'react';
import {
  BoardSizeConfigType,
  ESettingsConfigItem,
  RandomPercentageConfigType,
  useConfig,
} from '@/configs';
import { Board } from '@/components/board';
import { Controls } from '@/components/controls';
import { Layout } from '@/components/layout';
import {
  SettingsContainer,
  SettingsFill,
  SettingsSize,
} from '@/components/settings';

export const GamePage: React.FC = () => {
  const [currentSize, sizeConfig, onSizeChange] =
    useConfig<BoardSizeConfigType>(ESettingsConfigItem.BoardSizeConfig);
  const [currentFill, fillConfig, onFillChange] =
    useConfig<RandomPercentageConfigType>(
      ESettingsConfigItem.RandomFillPersentageConfig,
    );

  return (
    <Layout>
      <Controls />
      <Board size={currentSize} percentage={currentFill} />
      <SettingsContainer>
        <SettingsSize
          current={currentSize}
          config={sizeConfig}
          onChange={onSizeChange}
        />
        <SettingsFill
          current={currentFill}
          config={fillConfig}
          onChange={onFillChange}
        />
      </SettingsContainer>
    </Layout>
  );
};
