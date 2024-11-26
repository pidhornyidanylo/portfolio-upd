import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import Rectangle from '.';

describe('Rectangle component', () => {
  it('renders properly', () => {
    render(<Rectangle />);
    const rectanle = screen.getByRole('img', {
      name: /rect/i,
    });
    expect(rectanle).toBeInTheDocument();
  });
});
