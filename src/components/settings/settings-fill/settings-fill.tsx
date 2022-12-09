import React from 'react';
import { Row, RowsLabel } from '@/ui/rows';
import { FillButtons } from './fill-buttons';

export const SettingsFill = React.memo(() => (
  <Row columns={4}>
    <RowsLabel>Random fill:</RowsLabel>
    <FillButtons />
  </Row>
));
