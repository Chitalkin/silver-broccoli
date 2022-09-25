import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { screen, render } from '@testing-library/react';
import { LocationDisplay } from '../location-display';

describe('LocationDisplay', () => {
  it('should render correctly', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <LocationDisplay />
      </MemoryRouter>,
    );

    expect(screen.getByTestId('location-display')).toBeInTheDocument();
  });
});
