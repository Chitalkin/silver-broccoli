import React from 'react';
import { screen, render } from '@testing-library/react';
import { SettingsConfig } from '@/configs';
import { Board } from '../board';

describe('Board', () => {
  it('should render correctly', () => {
    render(<Board config={SettingsConfig.boardSizeConfig.small} />);

    expect(screen.getByTestId('board-component')).toBeInTheDocument();
  });

  it('should contain expected number of elements', () => {
    render(<Board config={SettingsConfig.boardSizeConfig.small} />);

    expect(screen.getAllByTestId('cell-component')).toHaveLength(1500);
  });
});
