import React from 'react';
import { Row, RowsLabel } from '@/ui/rows';
import { SizeButtons } from './size-buttons';

export const SettingsSize = React.memo(() => {
  return (
    <Row columns={4}>
      <RowsLabel>Board Size:</RowsLabel>
      <SizeButtons />
    </Row>
  );
});
