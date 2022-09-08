import React from 'react';
import styled from 'styled-components';
import { Button } from '@/ui/button';
import { SETTINGS, FONT } from '@/styles/colors';

const SettingsWrapper = styled.div`
  display: grid;
  grid-row-gap: 10px;
  width: 650px;
  background-color: ${SETTINGS.background};
  color: ${FONT.default};
  padding: 6px 20px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`;

const SettingsRow = styled.div`
  width: 100%;
  display: grid;
  grid-column-gap: 10px;
  grid-template-columns: repeat(4, 1fr);
`;

const SettingsLabel = styled.span`
  font-size: 20px;
`;

export const Settings = React.memo(() => {
  return (
    <SettingsWrapper data-testid="settings-component">
      <SettingsRow>
        <SettingsLabel>Board Size:</SettingsLabel>
        <Button>Size: 50x30</Button>
        <Button>Size: 70x50</Button>
        <Button>Size: 100x80</Button>
      </SettingsRow>
      <SettingsRow>
        <SettingsLabel>Sim Speed: </SettingsLabel>
        <Button>Slow</Button>
        <Button>Medium</Button>
        <Button>Fast</Button>
      </SettingsRow>
    </SettingsWrapper>
  );
});
