import React from 'react';
import styled from 'styled-components';
import { BoardSizeConfigType, ESettingsConfigItem, useConfig } from '@/configs';
import { GlobalStyle } from '@/styles/global';
import { Board } from '../board';
import { Controls } from '../controls';
import { SettingsContainer, SettingsSize } from '../settings';
// import { LoginModal } from '../modals';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const App: React.FC = () => {
  const [currentSize, sizeConfig, onSizeChange] =
    useConfig<BoardSizeConfigType>(ESettingsConfigItem.BoardSizeConfig);

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
        </SettingsContainer>
        {/* <LoginModal /> */}
      </Wrapper>
    </>
  );
};
