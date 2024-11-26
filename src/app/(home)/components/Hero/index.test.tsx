import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import Home from '../../page';

jest.mock('gsap', () => {
  const originalGsap = jest.requireActual('gsap');
  return {
    ...originalGsap,
    registerPlugin: jest.fn(),
    from: jest.fn(),
    to: jest.fn(),
    matchMedia: jest.fn(() => ({
      add: jest.fn((query, callback) => {
        const ctx = callback();
        return {
          revert: jest.fn(),
          ...ctx,
        };
      }),
      revert: jest.fn(),
    })),
  };
});

jest.mock('gsap/TextPlugin', () => jest.fn());
jest.mock('gsap/ScrollTrigger', () => jest.fn());

beforeAll(() => {
  window.matchMedia =
    window.matchMedia ||
    function () {
      return {
        matches: false,
        addListener: function () {},
        removeListener: function () {},
      };
    };
});

describe('Home component', () => {
  it('renders content properly', () => {
    render(<Home />);
    const heroSection = screen.getByTestId('hero-section');
    expect(heroSection).toBeInTheDocument();
  });
});
