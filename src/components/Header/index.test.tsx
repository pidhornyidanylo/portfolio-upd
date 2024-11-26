import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import Header from '.';

describe('Header component', () => {
  it('renders content properly', () => {
    render(<Header />);
    const banner = screen.getByRole('banner');
    const icon = screen.getByRole('img', {
      name: /logo\-icon/i,
    });
    expect(banner).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });
});
