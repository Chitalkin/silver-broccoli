import { screen } from '@testing-library/react';

describe('Header', () => {
  it('should render correctly', () => {
    expect(screen.getByTestId('header-component')).toBeInTheDocument();
  });
});
