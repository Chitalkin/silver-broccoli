import React from 'react';
import { Board } from '@/components/board';
import { Controls } from '@/components/controls';
import {
  SettingsContainer,
  SettingsFill,
  SettingsSize,
} from '@/components/settings';
import styled from 'styled-components';
import { Header } from '@/components/header';
import { useAuth } from '@/hooks';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const GamePage: React.FC = () => {
  const [name, logout] = useAuth();

  return (
    <>
      <Header name={name} logout={logout} />
      <Wrapper>
        <Controls />
        <Board />
        <SettingsContainer>
          <SettingsSize />
          <SettingsFill />
        </SettingsContainer>
      </Wrapper>
    </>
  );
};
