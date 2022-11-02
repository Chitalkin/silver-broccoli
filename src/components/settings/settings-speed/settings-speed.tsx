import React from 'react';
import { Row, RowsLabel } from '@/ui/rows';
import { SpeedButtons } from './speed-buttons';

export const SettingsSpeed = React.memo(() => (
  <Row columns={3}>
    <RowsLabel>Game speed:</RowsLabel>
    <SpeedButtons />
  </Row>
));
