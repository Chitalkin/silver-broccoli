import React from 'react';
import { Row, RowsLabel } from '@/ui/rows';
import { useFillButtons } from './use-fill-buttons';

export const SettingsFill = React.memo(() => {
  const configButtons = useFillButtons();

  return (
    <Row>
      <RowsLabel>Random content:</RowsLabel>
      {configButtons}
    </Row>
  );
});
