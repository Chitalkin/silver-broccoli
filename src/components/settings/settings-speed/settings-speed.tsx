import React from 'react';
import { Row, RowsLabel } from '@/ui/rows';
import { useSpeedButtons } from './use-speed-buttons';

export const SettingsSpeed = React.memo(() => {
  const configButtons = useSpeedButtons();

  return (
    <Row>
      <RowsLabel>Game speed:</RowsLabel>
      {configButtons}
    </Row>
  );
});
