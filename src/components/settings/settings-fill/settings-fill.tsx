import React from 'react';
import { RandomPercentageConfigType, ERandomPercentage } from '@/configs';
import { Row, RowsLabel } from '@/ui/rows';
import { useFillButtons } from './use-fill-buttons';

interface SettingsFillProps {
  current: number;
  config: RandomPercentageConfigType;
  onChange: (value: ERandomPercentage) => void;
}

export const SettingsFill = React.memo<SettingsFillProps>(
  ({ current, config, onChange }) => {
    const configButtons = useFillButtons(current, config, onChange);

    return (
      <Row>
        <RowsLabel>Random content:</RowsLabel>
        {configButtons}
      </Row>
    );
  },
);
