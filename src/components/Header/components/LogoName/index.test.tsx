import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import LogoName from '.';

jest.mock('gsap', () => {
  const originalGsap = jest.requireActual('gsap');
  return {
    ...originalGsap,
    context: jest.fn((callback) => {
      callback();
      return { revert: jest.fn() };
    }),
    to: jest.fn((target) => {
      return target;
    }),
    registerPlugin: jest.fn(),
  };
});

jest.mock('gsap/TextPlugin', () => jest.fn());

describe('LogoName component', () => {
  it('renders properly', () => {
    render(<LogoName />);
    const heading = screen.getByTestId('logo');
    expect(heading).toBeInTheDocument();
  });
});
