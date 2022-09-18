import styled from 'styled-components';
import { SETTINGS, FONT } from '@/styles/colors';

export const SettingsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: ${SETTINGS.background};
  color: ${FONT.default};
  padding: 6px 20px;
  border-radius: 6px;
  max-width: 840px;
`;
