import React from 'react';
import {
  BoardSizeConfigItem,
  BoardSizeConfigType,
  EBoardSize,
} from '@/configs';
import { Row, RowsLabel } from '@/ui/rows';
import { useSizeButtons } from './use-size-buttons';

interface SettingsSizeProps {
  current: BoardSizeConfigItem;
  config: BoardSizeConfigType;
  onChange: (value: EBoardSize) => void;
}

export const SettingsSize = React.memo<SettingsSizeProps>(
  ({ current, config, onChange }) => {
    const configButtons = useSizeButtons(current, config, onChange);

    return (
      <Row>
        <RowsLabel>Board Size:</RowsLabel>
        {configButtons}
      </Row>
    );
  },
);
