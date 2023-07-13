import React from 'react';
import { Board } from '@/components/board';
import { Controls } from '@/components/controls';
import {
  SettingsContainer,
  SettingsFill,
  SettingsSpeed,
} from '@/components/settings';
import styled from 'styled-components';
import { Header } from '@/components/header';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const GamePage: React.FC = () => (
  <>
    <Header />
    <Wrapper>
      <Controls />
      <Board />
      <SettingsContainer>
        <SettingsSpeed />
        <SettingsFill />
      </SettingsContainer>
    </Wrapper>
  </>
);
