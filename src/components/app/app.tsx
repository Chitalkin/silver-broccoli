import React from 'react';
import styled from 'styled-components';
import {
  BoardSizeConfigType,
  ESettingsConfigItem,
  RandomPercentageConfigType,
  useConfig,
} from '@/configs';
import { GlobalStyle } from '@/styles/global';
import { Board } from '../board';
import { Controls } from '../controls';
import { SettingsContainer, SettingsFill, SettingsSize } from '../settings';
// import { LoginModal } from '../modals';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const App: React.FC = () => {
  const [currentSize, sizeConfig, onSizeChange] =
    useConfig<BoardSizeConfigType>(ESettingsConfigItem.BoardSizeConfig);
  const [currentFill, fillConfig, onFillChange] =
    useConfig<RandomPercentageConfigType>(
      ESettingsConfigItem.RandomFillPersentageConfig,
    );

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Controls />
        <Board config={currentSize} />
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
        {/* <LoginModal /> */}
      </Wrapper>
    </>
  );
};
