import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import LeftRectangleContainer from '.';

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

describe('LeftRectangleContainer component', () => {
  it('renders content properly', () => {
    render(<LeftRectangleContainer />);
    const leftRectangleContainer = screen.getByTestId('leftRectangleContainer');
    const leftSmallRectangle = screen.getByTestId('leftSmallRectangle');
    const leftLargeRectangle = screen.getByTestId('leftLargeRectangle');

    expect(leftRectangleContainer).toBeInTheDocument();
    expect(leftSmallRectangle).toBeInTheDocument();
    expect(leftLargeRectangle).toBeInTheDocument();
  });
});
