import React from 'react';
import { screen, render } from '@testing-library/react';
import { Settings } from '../settings';

describe('Settings', () => {
  it('should render correctly', () => {
    render(<Settings />);

    expect(screen.getByTestId('settings-component')).toBeInTheDocument();
  });
});
