import React, { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BoardSizeConfigType,
  ESettingsConfigItem,
  RandomPercentageConfigType,
  useConfig,
} from '@/configs';
import { Board } from '@/components/board';
import { Controls } from '@/components/controls';
import {
  SettingsContainer,
  SettingsFill,
  SettingsSize,
} from '@/components/settings';
import styled from 'styled-components';
import { Header } from '@/components/header';
import { useLocalStorage } from '@/hooks';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const GamePage: React.FC = () => {
  const [name, setName] = useLocalStorage('name', '');
  const navigate = useNavigate();

  useEffect(() => {
    if (!name) {
      navigate('/');
    }
  }, [name, navigate]);

  const logout = useCallback(() => {
    setName('');
    navigate('/');
  }, [navigate, setName]);

  const [currentSize, sizeConfig, onSizeChange] =
    useConfig<BoardSizeConfigType>(ESettingsConfigItem.BoardSizeConfig);
  const [currentFill, fillConfig, onFillChange] =
    useConfig<RandomPercentageConfigType>(
      ESettingsConfigItem.RandomFillPersentageConfig,
    );

  return (
    <>
      <Header name={name} logout={logout} />
      <Wrapper>
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
      </Wrapper>
    </>
  );
};
