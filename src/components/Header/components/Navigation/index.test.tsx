import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import Navigation from '.';

describe('Navigation component', () => {
  it('renders list properly', () => {
    render(<Navigation />);
    const listElement = screen.getByRole('list');
    expect(listElement).toBeInTheDocument();
  });
});
