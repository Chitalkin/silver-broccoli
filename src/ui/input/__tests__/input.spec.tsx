import React from 'react';
import { render, screen } from '@testing-library/react';
import { Input } from '../input';
describe('Button', () => {
  it('should render correctly', () => {
    render(<Input placeholder="ui-input" />);

    expect(screen.getByPlaceholderText(/ui-input/)).toBeInTheDocument();
  });
});
