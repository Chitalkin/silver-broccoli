import React from 'react';
import { screen, render } from '@testing-library/react';
import { SettingsConfig } from '@/configs';
import { Board } from '../board';

describe('Board', () => {
  it('should render correctly', () => {
    render(
      <Board
        size={SettingsConfig.boardSizeConfig.small}
        percentage={SettingsConfig.randomFillPersentageConfig.none}
      />,
    );

    expect(screen.getByTestId('board-component')).toBeInTheDocument();
  });
});
