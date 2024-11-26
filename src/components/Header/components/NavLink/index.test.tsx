import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import NavLink from '.';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

import { usePathname } from 'next/navigation';

describe('NavLink component', () => {
  it('renders links properly', () => {
    render(<NavLink path={'Mock'} href={'/mock'} />);
    const linkElement = screen.getByRole('link', {
      name: /mock/i,
    });
    expect(linkElement).toBeInTheDocument();
  });

  it('applies proper class for current route link', () => {
    (usePathname as jest.Mock).mockReturnValue('/mock');

    render(<NavLink path={'Mock'} href={'/mock'} />);
    const linkElement = screen.getByRole('link', {
      name: /mock/i,
    });

    expect(linkElement).toHaveClass('active');
    expect(linkElement).toHaveAttribute('href', '/mock');
  });

  it('does not apply active class for non-current route link', () => {
    (usePathname as jest.Mock).mockReturnValue('/different');

    render(<NavLink path={'Mock'} href={'/mock'} />);
    const linkElement = screen.getByRole('link', {
      name: /mock/i,
    });

    expect(linkElement).not.toHaveClass('active');
  });
});
