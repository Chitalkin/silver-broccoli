import React from 'react';
import { Row, RowsLabel } from '@/ui/rows';
import { useSizeButtons } from './use-size-buttons';

export const SettingsSize = React.memo<{}>(() => {
  const configButtons = useSizeButtons();

  return (
    <Row>
      <RowsLabel>Board Size:</RowsLabel>
      {configButtons}
    </Row>
  );
});
